import express from 'express';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  if (typeof process.loadEnvFile === 'function') {
    try {
      process.loadEnvFile(envPath);
    } catch (e) {}
  }
  // Manual parser fallback for older Node versions or edge cases
  try {
    const rawContent = fs.readFileSync(envPath, 'utf8');
    rawContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          let val = trimmed.slice(eqIdx + 1).trim();
          if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
            val = val.slice(1, -1);
          }
          if (!process.env[key]) {
            process.env[key] = val;
          }
        }
      }
    });
  } catch (e) {}
}


const app = express();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.json());

const SSP_ALPHA_TO_DIGIT = {
  'A': '0', 'B': '1', 'C': '2', 'D': '3', 'E': '4',
  'F': '5', 'G': '6', 'H': '7', 'I': '8', 'J': '9'
};

function decodeSspId(input) {
  if (!input || typeof input !== 'string') return null;
  const trimmed = input.trim();

  // If already purely digits (e.g. numeric ID)
  if (/^\d+$/.test(trimmed)) {
    return trimmed;
  }

  // Validate cipher format rules
  if (/^\d/.test(trimmed)) return null; // Starts with num
  if (/[a-zA-Z]$/.test(trimmed)) return null; // Ends with alpha
  if (/[a-zA-Z]{2,}/.test(trimmed)) return null; // Alpha + Alpha
  if (/\d{2,}/.test(trimmed)) return null; // Num + Num
  if (trimmed.length % 2 !== 0) return null; // Must be even pairs

  let extracted = '';
  for (let i = 0; i < trimmed.length; i += 2) {
    const alpha = trimmed[i].toUpperCase();
    const digit = trimmed[i + 1];

    if (!(alpha in SSP_ALPHA_TO_DIGIT)) return null;
    if (!/^\d$/.test(digit)) return null;
    if (SSP_ALPHA_TO_DIGIT[alpha] !== digit) return null;

    extracted += digit;
  }

  return extracted;
}

// API endpoint for verification
app.get('/api/verify', async (req, res) => {
  const rawSspId = req.query.sspId;

  if (!rawSspId) {
    return res.status(400).json({ error: 'Bad Request: Missing sspId' });
  }

  const sspId = decodeSspId(rawSspId);
  if (!sspId) {
    return res.status(400).json({ error: 'Bad Request: Invalid or corrupted sspId format', invalid: true });
  }

  const apiBaseUrl = process.env.KNOZ_API_BASE_URL ? process.env.KNOZ_API_BASE_URL.replace(/\/+$/, '') : '';
  const username = process.env.KNOZ_API_USERNAME;
  const password = process.env.KNOZ_API_PASSWORD;

  if (!apiBaseUrl || !username || !password) {
    console.error('Server configuration error: Missing API configuration in Environment Variables');
    return res.status(500).json({ error: 'Server configuration error: Missing API credentials in environment variables' });
  }

  try {
    // 1. Login to get token
    const loginRes = await fetch(`${apiBaseUrl}/api/Auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        usernameOrEmail: username,
        password: password,
        appType: 0
      })
    });

    if (!loginRes.ok) {
      return res.status(loginRes.status).json({ error: 'Failed to authenticate with external service' });
    }

    const data = await loginRes.json();
    const token = data?.record?.token;

    if (!token) {
      return res.status(500).json({ error: 'Failed to retrieve token' });
    }

    // 2. Fetch certificate details
    const detailsRes = await fetch(`${apiBaseUrl}/api/Monitor/Assigned-Student-Course-Details?SSPId=${sspId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!detailsRes.ok) {
      return res.status(detailsRes.status).json({ error: 'Failed to fetch certificate details' });
    }

    const detailsData = await detailsRes.json();
    return res.status(200).json(detailsData);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Ensure Angular build exists
const distBrowserPath = path.join(__dirname, 'dist', 'browser');
if (!fs.existsSync(path.join(distBrowserPath, 'index.html'))) {
  console.log('[AI Studio] Angular build not found in dist/browser. Building now...');
  execSync('npm run build', { stdio: 'inherit' });
}

// Serve Angular static assets
app.use(express.static(distBrowserPath));

// Angular SPA fallback
app.use((req, res) => {
  res.sendFile(path.join(distBrowserPath, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`\n  🚀 Server is ready:`);
  console.log(`  ➜ Local:   http://localhost:${PORT}/`);
  console.log(`  ➜ Network: http://${HOST === '0.0.0.0' ? '127.0.0.1' : HOST}:${PORT}/`);
  if (!process.env.KNOZ_API_BASE_URL || !process.env.KNOZ_API_USERNAME || !process.env.KNOZ_API_PASSWORD) {
    console.warn(`\n  ⚠️  Notice: API credentials not found! Please create a .env file with KNOZ_API_BASE_URL, KNOZ_API_USERNAME, and KNOZ_API_PASSWORD.`);
  }
  console.log('');
});
