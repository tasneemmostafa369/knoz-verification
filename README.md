# Knoz Certificate Verification Portal

<div align="center">

  <img src="src/assets/logo.jpeg" alt="Knoz Academy Logo" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(200, 165, 89, 0.35); border: 3px solid #C8A559; margin-bottom: 16px;" onerror="this.style.display='none'" />

  <h1>Knoz Certificate Verification Portal<br/><span>بوابة التحقق الإلكتروني من الشهادات — أكاديمية كنوز</span></h1>

  <p><strong>Enterprise-Grade, Secure, Real-Time Academic Credential & Certificate Verification Engine</strong></p>

  <p>
    <a href="#-part-1-english-documentation">English Documentation</a> &nbsp;•&nbsp;
    <a href="#-الجزء-الثاني-دليل-التوثيق-باللغة-العربية">الوثائق باللغة العربية</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Angular-21.2-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular 21" />
    <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Vercel-Serverless-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Architecture-Zoneless_Signals-0F392B?style=for-the-badge" alt="Zoneless Signals" />
    <img src="https://img.shields.io/badge/License-MIT-C8A559?style=for-the-badge" alt="License MIT" />
  </p>

</div>

---

## 📑 Table of Global Contents / فهرس المحتويات العام

- [🇬🇧 Part 1: English Documentation](#-part-1-english-documentation)
  - [1. Executive Overview](#1-executive-overview)
  - [2. Key Features & Business Highlights](#2-key-features--business-highlights)
  - [3. Architecture & Technical Stack](#3-architecture--technical-stack)
  - [4. The SSP Cipher Protocol](#4-the-ssp-cipher-protocol)
  - [5. Project Directory & File Structure](#5-project-directory--file-structure)
  - [6. Getting Started & Installation](#6-getting-started--installation)
  - [7. Production Deployment (Vercel & Self-Hosted)](#7-production-deployment-vercel--self-hosted)
  - [8. Engineering Best Practices & Standards](#8-engineering-best-practices--standards)
  - [9. Product Roadmap](#9-product-roadmap)
  - [10. Contributing & License](#10-contributing--license)
- [🇸🇦 الجزء الثاني: دليل التوثيق باللغة العربية](#-الجزء-الثاني-دليل-التوثيق-باللغة-العربية)
  - [1. نظرة عامة ورؤية المنصة](#1-نظرة-عامة-ورؤية-المنصة)
  - [2. الميزات الرئيسية والقيمة التشغيلية](#2-الميزات-الرئيسية-والقيمة-التشغيلية)
  - [3. المعمارية الهندسية وحزمة التقنيات](#3-المعمارية-الهندسية-وحزمة-التقنيات)
  - [4. بروتوكول التشفير والتحقق الذكي (SSP Cipher)](#4-بروتوكول-التشفير-والتحقق-الذكي-ssp-cipher)
  - [5. الهيكل التنظيمي للملفات والمجلدات](#5-الهيكل-التنظيمي-للملفات-والمجلدات)
  - [6. دليل التثبيت والتشغيل المحلي](#6-دليل-التثبيت-والتشغيل-المحلي)
  - [7. إعدادات النشر على السحابة (Vercel والخوادم الخاصة)](#7-إعدادات-النشر-على-السحابة-vercel-والخوادم-الخاصة)
  - [8. معايير التطوير وجودة الكود](#8-معايير-التطوير-وجودة-الكود)
  - [9. خارطة الطريق والتطوير المستقبلي](#9-خارطة-الطريق-والتطوير-المستقبلي)
  - [10. المساهمة والترخيص](#10-المساهمة-والترخيص)

---

# 🇬🇧 Part 1: English Documentation

## 1. Executive Overview

The **Knoz Certificate Verification Portal** is an ultra-fast, highly secure, standalone web application engineered for **Knoz Academy (أكاديمية كنوز)**. Its primary mission is to authenticate and present academic graduation credentials, course accomplishments, teacher credentials, and attendance logs for students who scan dynamic QR codes on physical or digital certificates.

Built upon **Angular 21** with a **Zoneless Signal-based architecture**, styled with **Tailwind CSS v4**, and backed by an isolated **Serverless / Reverse-Proxy Gateway**, the portal guarantees:
- **Zero API Credential Exposure:** End users and client browsers never see internal tokens, base URLs, or credentials.
- **Client-Side Anti-Tamper Verification:** An algorithmic cipher parser audits incoming verification links in less than 1 millisecond prior to dispatching any backend request.
- **Bilingual Fluidity:** Seamless, instantaneous switching between Arabic (RTL) and English (LTR) without page reloads.
- **Visual Prestige:** A bespoke academic luxury aesthetic combining Emerald Green (`#0F392B`), Royal Gold (`#C8A559`), and warm cream accents with GPU-accelerated micro-animations.

---

## 2. Key Features & Business Highlights

### 🛡️ 1. Cryptographic Link Validation (Anti-Tamper Layer)
- Dynamic QR codes generated on certificates encode the student subscription plan ID (`SSP-ID`) into an alternating alphanumeric cipher (e.g., `B1A0G6D3H7`).
- The application evaluates 7 structural constraints before hitting any server endpoint:
  1. Mandatory Alpha lead (must not start with a digit).
  2. Mandatory Num tail (must not end with a letter).
  3. No adjacent letters (`Alpha + Alpha` disallowed).
  4. No adjacent digits (`Num + Num` disallowed).
  5. Exact even length (composed strictly of Alpha-Num pairs).
  6. Character whitelist (A–J corresponding to digits 0–9).
  7. Strict pair correspondence (`SSP_ALPHA_TO_DIGIT[A] === 0`).
- Manipulated or fabricated URLs trigger an immediate, high-fidelity **"Not Valid Link"** defense screen with zero unnecessary network calls.

### 🔒 2. Zero-Leakage Secure Backend Proxy
- The browser client only communicates with an internal endpoint: `/api/verify?sspId={id}`.
- All outbound communication to the central academic management system (`knoz-api`) is encapsulated server-side:
  - Automated OAuth/JWT authentication flow using secure credentials (`KNOZ_API_USERNAME`, `KNOZ_API_PASSWORD`).
  - Bearer token acquisition, validation, and request proxying.
  - Base URL configuration injected entirely via `KNOZ_API_BASE_URL` without exposing domain endpoints in public repositories or client network tabs.

### 🌐 3. Real-Time Localization & Internationalization (RTL / LTR)
- Comprehensive in-memory dictionary covering all system notices, error states, labels, and badges in both **Arabic (العربية)** and **English**.
- Real-time DOM attribute updates (`[dir]="rtl"` / `[dir]="ltr"`) and localized typography (Amiri for classical Arabic majesty and Tajawal for modern clarity).
- Dynamic Arabic date, hour formatters (`ص / م` vs `AM / PM`), and localized day-of-week resolvers.

### 📊 4. Bento-Box Academic Dashboard
- **Golden Academic Seal:** Dynamic SVG seal with CSS stamp micro-interaction and continuous ambient golden pulse.
- **Student Honoree Showcase:** Ultra-wide hero section with horizontal scroll safety for extended multi-part names.
- **Curriculum Card:** Distinct visualization of Course Package, Study Plan, and Subject.
- **Academic Mentorship Grid:** High-contrast instructor card with gold trim alongside supervisor/monitor accountability details.
- **Metric Insights:** Compact badge displays for total completed sessions and individual session duration.
- **Course Timeline & Class Pattern:** Connected start-to-end timeline with an interactive weekly schedule matrix.

---

## 3. Architecture & Technical Stack

```
+-----------------------------------------------------------------------------------------+
|                                    CLIENT BROWSER                                       |
|                                                                                         |
|   +-----------------------+     +------------------------+     +--------------------+   |
|   | Angular 21 Standalone | --> |   SSP Cipher Validator | --> | VerificationService|   |
|   | Component & Signals   |     |  (Client-side 7 rules) |     |  (Fetch /api/verify)   |
|   +-----------------------+     +------------------------+     +--------------------+   |
+---------------------------------------------------------------------------|-------------+
                                                                            |
                                               Internal Secure Route (/api) |
                                                                            v
+-----------------------------------------------------------------------------------------+
|                           SERVER RUNTIME (Vercel / Node.js)                             |
|                                                                                         |
|       +-------------------------------------------------------------------------+       |
|       | api/verify.js (Vercel Function)  OR  server.js (Express Proxy)          |       |
|       |                                                                         |       |
|       | 1. Read process.env.KNOZ_API_BASE_URL, USERNAME, PASSWORD               |       |
|       | 2. Post /api/Auth/login -> Exchange credentials for Bearer JWT          |       |
|       | 3. Get /api/Monitor/Assigned-Student-Course-Details?SSPId={id}          |       |
|       | 4. Sanitize and stream JSON payload back to Angular client              |       |
|       +-------------------------------------------------------------------------+       |
+-----------------------------------------------------------------------------------------+
                                            |
                                            | HTTPS + Bearer JWT
                                            v
+-----------------------------------------------------------------------------------------+
|                         UPSTREAM ACADEMY API (Remote Server)                            |
+-----------------------------------------------------------------------------------------+
```

### Technical Stack Matrix

| Domain | Technology | Version | Purpose & Strategic Advantage |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **Angular** | `21.2.0` | Latest generation standalone components, Zoneless change detection, Signal primitives. |
| **Language & Typings** | **TypeScript** | `~5.9.2` | Strict null-checking, interface contracts, safe typed signals. |
| **Styling Engine** | **Tailwind CSS** | `^4.1.12` | High-performance CSS compilation via `@tailwindcss/postcss`, theme custom properties. |
| **Iconography & Fonts** | **FontAwesome Free** | `^7.3.1` | Vector icons paired with Google Webfonts (`Amiri` and `Tajawal`). |
| **Backend & Proxy** | **Express / Node** | `5.2.1` / `20+` | Full-stack server runner and native environment file loader (`process.loadEnvFile`). |
| **Serverless Runtime** | **Vercel Functions** | ES Modules | Edge-ready serverless function executing at `/api/verify.js`. |
| **Build Pipeline** | **Angular Build CLI** | `^21.2.9` | High-speed Vite-powered development server and optimized AOT production bundler. |

---

## 4. The SSP Cipher Protocol

To eliminate plain database IDs in QR codes and printed materials, the platform implements a bi-directional substitution-pair cipher:

### Cipher Dictionary
| Digit | `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Cipher Alpha** | **`A`** | **`B`** | **`C`** | **`D`** | **`E`** | **`F`** | **`G`** | **`H`** | **`I`** | **`J`** |

### Encoding Example
- Student Database Plan ID: `10637`
- Formatted Pairs: `1 -> B1`, `0 -> A0`, `6 -> G6`, `3 -> D3`, `7 -> H7`
- Encoded Verification Code: `B1A0G6D3H7`

### Decoding & Enforcement Pipeline (`src/app/core/utils/ssp-cipher.ts`)
```typescript
const result = validateAndDecodeSspId('B1A0G6D3H7');
// Output: { isValid: true, numericId: "10637" }

const tamperedResult = validateAndDecodeSspId('1B0A6GD3H7');
// Output: { isValid: false, numericId: null, errorReason: "START_WITH_NUM" }
```

---

## 5. Project Directory & File Structure

```
knoz-verification/
├── api/
│   └── verify.js                     # Vercel Serverless Function (secure external API gateway)
├── public/
│   └── favicon.ico                   # Application browser favicon
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── mock/
│   │   │   │   └── dictionary.ts     # Bilingual localization dictionary (AR / EN)
│   │   │   ├── services/
│   │   │   │   └── verification.service.ts # Client verification HTTP dispatcher
│   │   │   └── utils/
│   │   │       └── ssp-cipher.ts     # Cryptographic validation & decoder engine
│   │   ├── features/
│   │   │   └── certificate-verification/
│   │   │       ├── certificate-verification.html # Bento-grid UI template & animations
│   │   │       └── certificate-verification.ts   # Signal-based view model & state
│   │   ├── app.config.ts             # Application-level providers (router, hydration)
│   │   ├── app.html                  # Minimal root outlet container
│   │   ├── app.routes.ts             # Route definitions with dynamic /:sspId mapping
│   │   └── app.ts                    # Root Standalone Component
│   ├── assets/
│   │   └── logo.jpeg                 # Official Knoz Academy golden brand logo
│   ├── index.html                    # HTML shell, Google Fonts, OpenGraph metadata
│   ├── main.ts                       # Zoneless application bootstrapper
│   └── styles.css                    # Tailwind CSS v4 imports and custom theme variables
├── .env.example                      # Template for environment variables (clean of secrets)
├── .gitignore                        # Git exclusion rules (.env, node_modules, dist)
├── angular.json                      # Angular workspace and build configurations
├── package.json                      # Dependency manifests and execution scripts
├── server.js                         # Production Express server with static serving & proxy
├── tsconfig.app.json                 # Client TypeScript compiler options
└── tsconfig.json                     # Root TypeScript configuration
```

---

## 6. Getting Started & Installation

### Prerequisites
- **Node.js**: `v20.12.0` or higher
- **Package Manager**: `npm` (`v10+`)
- **Git**

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR_ORGANIZATION/knoz-verification.git
   cd knoz-verification
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment template into a local `.env` file:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and provide your credentials:
   ```env
   KNOZ_API_BASE_URL=https://knoz-api.knoz.online
   KNOZ_API_USERNAME=your_authorized_username
   KNOZ_API_PASSWORD=your_authorized_password
   ```

4. **Launch the Development Server:**
   ```bash
   npm run dev
   ```
   The application builds the client bundle and serves the backend proxy on:
   ```
   http://localhost:3000
   ```

5. **Test a Sample Verification Link:**
   Open your browser and navigate to:
   ```
   http://localhost:3000/B1A0G6D3H7
   ```

---

## 7. Production Deployment (Vercel & Self-Hosted)

### Deployment Option A: Vercel (Recommended)

The project includes built-in Vercel serverless integration in `/api/verify.js`.

1. Push your repository to **GitHub / GitLab / Bitbucket**.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. In the **Environment Variables** panel, define:
   - `KNOZ_API_BASE_URL` = `https://knoz-api.knoz.online`
   - `KNOZ_API_USERNAME` = `your_username`
   - `KNOZ_API_PASSWORD` = `your_password`
5. Click **Deploy**. Vercel will automatically build the Angular application and route `/api/verify` requests to the serverless function.

### Deployment Option B: Self-Hosted Node.js / Docker

To run on a dedicated Linux VPS or container:

```bash
# 1. Build the Angular production bundle
npm run build

# 2. Run the production Express server
npm start
```
The Express server in `server.js` automatically binds to `0.0.0.0:3000`, serves the compiled Angular files from `dist/knoz-verification/browser`, and serves the live `/api/verify` proxy.

---

## 8. Engineering Best Practices & Standards

- **Zoneless Signal Reactivity:** Completely free from `zone.js` overhead; relies on Angular `signal()`, `computed()`, and native microtasks.
- **Strict Separation of Concerns:** Business logic resides in `core/services/` and `core/utils/`, completely decoupling UI view components from HTTP transports.
- **Zero Secrets in Git:** Sensitive environment variables are strictly blocked via `.gitignore` with wildcard patterns (`.env*`).
- **Defensive API Calls:** Safe parameter decoding, trailing-slash normalization via `.replace(/\/+$/, '')`, and robust HTTP status error code propagation.

---

## 9. Product Roadmap

- [ ] **Direct PDF Certificate Export:** One-click vectorized PDF generation with printable print media stylesheets (`@media print`).
- [ ] **Web Share API Integration:** Native mobile OS share sheet integration for instant WhatsApp and Telegram verification link sharing.
- [ ] **Admin QR Generator Tooling:** An internal authenticated screen for academic staff to input numeric IDs and generate downloadable high-res QR codes.
- [ ] **Progressive Web App (PWA) Offline Shell:** Service Worker caching for repeated certificate verifications in low-connectivity areas.

---

## 10. Contributing & License

Contributions are welcome! Please adhere to the following workflow:
1. Fork the project.
2. Create a feature branch (`git checkout -b feature/credential-enhancement`).
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m 'feat: add qr export utility'`).
4. Push to the branch (`git push origin feature/credential-enhancement`).
5. Open a Pull Request.

**License:** This project is licensed under the **MIT License**. Copyright &copy; Knoz Academy.

---
---

# 🇸🇦 الجزء الثاني: دليل التوثيق باللغة العربية

## 1. نظرة عامة ورؤية المنصة

**بوابة التحقق الإلكتروني من الشهادات (Knoz Certificate Verification Portal)** هي منظومة ويب مؤسسية فائقة السرعة وعالية الأمان، صُممت خصيصاً لصالح **أكاديمية كنوز**. الهدف الأساسي من المنظومة هو توفير وسيلة موثوقة وفورية للتحقق من صحة الشهادات الأكاديمية الصادرة من الأكاديمية، وعرض تفاصيل إتمام الدورات، وبيانات المعلمين، والمشرفين، وسجل الحصص الأسبوعية عند مسح رمز الاستجابة السريعة (QR Code) المطبوع على الشهادة.

تم بناء البوابة بالاعتماد على أحدث إصدارات إطار العمل **Angular 21** بنظام **الإشارات التفاعلية (Signals)** الخالي تماماً من مكتبة Zone.js التقليدية (**Zoneless Architecture**)، مع واجهة بصرية مصممة بأحدث معايير **Tailwind CSS v4**، وخادم وسيط آمن لحماية البيانات الحساسة (**Reverse Proxy Gateway**).

### ركائز المنظومة:
- **حماية تامة للبيانات والاعتمادات:** عدم كشف أي مفاتيح سرية، أو رموز مصادقة (Tokens)، أو روابط خوادم داخلية للمتصفح أو في مستودع الكود.
- **فحص ذكي للروابط على طرف العميل:** خوارزمية تشفير خاصة تفحص رابط التحقق في أقل من جزء من الثانية لمنع التلاعب وتوفير موارد السيرفر.
- **دعم كامل للغتين (العربية والإنجليزية):** تجربة مستخدم فورية تتبدل بين واجهة RTL و LTR بضغطة زر وبدون إعادة تحميل الصفحة.
- **هوية بصرية أكاديمية فاخرة:** تصميم راقٍ يجمع بين اللون الأخضر الملكي للأكاديمية (`#0F392B`) والذهب الأنيق (`#C8A559`)، مع ختم ذهبي تفاعلي وتنسيق بطاقات بينتو الحديثة (Bento-Box).

---

## 2. الميزات الرئيسية والقيمة التشغيلية

### 🛡️ 1. التحقق من الشفرة ومقاومة التلاعب (Anti-Tamper Layer)
- يتم تشفير معرف اشتراك الطالب (`SSP-ID`) في كود الشهادة إلى شفرة أبجدية رقمية متناوبة (مثل: `B1A0G6D3H7`).
- تطبق الواجهة **7 قواعد تحقق صارمة** قبل إجراء أي اتصال بالسيرفر:
  1. يجب أن يبدأ الكود بحرف، وليس برقم.
  2. يجب أن ينتهي الكود برقم، وليس بحرف.
  3. منع تتالي حرفين أبجديين (`Alpha + Alpha`).
  4. منع تتالي رقمين (`Num + Num`).
  5. يجب أن يكون طول الكود زوجياً تماماً (أزواج مكونة من حرف ورقم).
  6. الحروف مقيدة بالقاموس المعتمد فقط من `A` إلى `J` والمقابلة للأرقام من `0` إلى `9`.
  7. تطابق الزوج الصارم (الحرف يجب أن يطابق الرقم بدقة وفق القاموس).
- في حال إدخال رمز غير صالح أو محاولة التلاعب بالرابط، تظهر فوراً شاشة حماية مخصصة **"رابط غير صالح / Not Valid Link"** دون استهلاك أي طلبات شبكة خارجية.

### 🔒 2. معمارية الخادم الوسيط والحماية القصوى (Zero-Leakage Proxy)
- المتصفح يتواصل فقط مع مسار داخلي `/api/verify?sspId={id}`.
- يتولى السيرفر في الخلفية إجراء عملية تسجيل الدخول والحصول على رمز المصادقة (Bearer Token) وجلب تفاصيل الكورس:
  - الاعتماد الكامل على المتغيرات البيئية `KNOZ_API_BASE_URL` و `KNOZ_API_USERNAME` و `KNOZ_API_PASSWORD`.
  - لا يمكن لأي مستخدم من خلال فحص المتصفح (Inspect / Network Tab) معرفة اسم الخادم الأساسي أو بيانات الحساب المسؤولة عن الجلب.

### 🌐 3. محرك الترجمة الفورية وثنائية اللغة
- قاموس نصوص داخلي متكامل يدعم اللغتين العربية والإنجليزية.
- تبديل مباشر لاتجاه الصفحة (`dir="rtl"` و `dir="ltr"`).
- مواءمة كاملة لصيغ التواريخ ومواعيد الحصص وأسماء الأيام وتنسيق الوقت بصيغة 12 ساعة (`ص / م` للعربية و `AM / PM` للإنجليزية).

### 📊 4. لوحة تفاصيل أكاديمية متكاملة (Bento-Box Grid)
- **الختم الأكاديمي الذهبي:** حركة دخول تفاعلية ثلاثية الأبعاد تحاكي ختم الاعتماد الرسمي مع نبض إشعاعي ذهبي مستمر.
- **بطاقة اسم الطالب المكرّم:** مساحة عريضة مجهزة للتكيف التلقائي مع الأسماء الطويلة والمركبة دون تشويه التصميم.
- **تفاصيل الدورة والمادة:** عرض منفصل لاسم الباقة الدراسية والمادة التخصصية مع أيقونات توضيحية.
- **بطاقات الكادر التعليمي:** بطاقة مميزة للمعلم/المعلمة مع خلفية خضراء داكنة وتأثيرات ضوئية، وبطاقة مخصصة لمشرف/مشرفة المسار.
- **مؤشرات الحصص والمدة:** شريط مدمج يوضح عدد الحصص الكلي ومدة الحصة بالدقائق.
- **الجدول الأسبوعي ومسار التاريخ:** خط زمني يربط بين تاريخ البداية والنهاية وشبكة بمواعيد الحصص خلال الأسبوع.

---

## 3. المعمارية الهندسية وحزمة التقنيات

### جدول حزمة التقنيات البرمجية

| المجال | التقنية المستخدمة | الإصدار | الوظيفة والدور الهندسي |
| :--- | :--- | :--- | :--- |
| **إطار عمل الواجهة** | **Angular** | `21.2.0` | مكونات مستقلة (Standalone)، نظام كشف التغيير بدون Zone.js، الإشارات (Signals). |
| **لغة البرمجة** | **TypeScript** | `~5.9.2` | فحص صارم للأنماط وتأمين كود خالي من الأخطاء التشغيلية. |
| **محرك التنسيق** | **Tailwind CSS** | `^4.1.12` | أحدث جيل من تيلويند باستخدام محرك PostCSS وتطبيق متغيرات الألوان المؤسسية. |
| **الأيقونات والخطوط** | **FontAwesome + Google Fonts** | `^7.3.1` | حزمة أيقونات متجهة مع خطوط عربية فاخرة (خط **الأميري** للعناوين و**تجوّل** للنصوص). |
| **خادم التطوير والإنتاج** | **Express.js / Node.js** | `5.2.1` / `20+` | خادم Full-Stack يدعم استضافة التطبيق كصفحة أحادية وتوفير مسار الـ Proxy. |
| **الدوال السحابية** | **Vercel Serverless** | ES Modules | تشغيل الدالة الخلفية `/api/verify.js` سحابياً بكفاءة عالية على منصة Vercel. |

---

## 4. بروتوكول التشفير والتحقق الذكي (SSP Cipher)

لحماية أرقام الاشتراكات وقواعد البيانات من التخمين العشوائي على روابط الـ QR، يتم تمثيل الأرقام في أزواج مشفرة:

### قاموس المطابقة (Dictionary Mapping)
| الرقم | `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **الحرف المشفر** | **`A`** | **`B`** | **`C`** | **`D`** | **`E`** | **`F`** | **`G`** | **`H`** | **`I`** | **`J`** |

### مثال عملي:
- رقم خطة الطالب الفعلي: `10637`
- تحويل الأرقام إلى أزواج متناوبة: `1 -> B1`، `0 -> A0`، `6 -> G6`، `3 -> D3`، `7 -> H7`
- الرمز الناتج النهائي على الرابط: `B1A0G6D3H7`

تقوم دالة `validateAndDecodeSspId` في مسار `src/app/core/utils/ssp-cipher.ts` بفحص الرمز واستخراج الرقم الحقيقي وإرساله للواجهة الخلفية بأمان.

---

## 5. الهيكل التنظيمي للملفات والمجلدات

```
knoz-verification/
├── api/
│   └── verify.js                     # دالة Vercel Serverless الخلفية لاستدعاء الـ API الخارجي بأمان
├── public/
│   └── favicon.ico                   # أيقونة الموقع للمتصفح
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── mock/
│   │   │   │   └── dictionary.ts     # قاموس النصوص للغتين العربية والإنجليزية
│   │   │   ├── services/
│   │   │   │   └── verification.service.ts # خدمة استدعاء نقطة التحقق البرمجية
│   │   │   └── utils/
│   │   │       └── ssp-cipher.ts     # خوارزمية فك تشفير وفحص كود الشهادة
│   │   ├── features/
│   │   │   └── certificate-verification/
│   │   │       ├── certificate-verification.html # قالب الواجهة وبطاقات التفاصيل والختم الذهبي
│   │   │       └── certificate-verification.ts   # منطق المكون وإدارة الحالة التفاعلية (Signals)
│   │   ├── app.config.ts             # إعدادات التطبيق وتوفير التوجيه (Router Providers)
│   │   ├── app.html                  # حاوية التوجيه الجذرية (<router-outlet>)
│   │   ├── app.routes.ts             # مسارات التوجيه ومطابقة الرابط الديناميكي /:sspId
│   │   └── app.ts                    # المكون الرئيسي للتطبيق
│   ├── assets/
│   │   └── logo.jpeg                 # الشعار الرسمي المعتمد لأكاديمية كنوز
│   ├── index.html                    # ملف الـ HTML الرئيسي مع خطوط جوجل والوسوم الوصفية
│   ├── main.ts                       # نقطة انطلاق التطبيق بدون Zone.js
│   └── styles.css                    # استيراد Tailwind CSS والمتغيرات اللونية الخاصة لكنوز
├── .env.example                      # نموذج توضيحي للمتغيرات البيئية خالٍ من الأسرار
├── .gitignore                        # استبعاد ملفات البيئة والحزم البرمجية من الرفع لـ Git
├── angular.json                      # إعدادات بيئة عمل وبناء Angular
├── package.json                      # الحزم والتبعيات والأوامر البرمجية
├── server.js                         # سيرفر Express للتشغيل المحلي والإنتاج
├── tsconfig.app.json                 # إعدادات مترجم TypeScript لتطبيق العميل
└── tsconfig.json                     # إعدادات TypeScript العامة
```

---

## 6. دليل التثبيت والتشغيل المحلي

### المتطلبات الأساسية
- تثبيت بيئة **Node.js** بإصدار `20.12.0` أو أحدث.
- مدير الحزم **npm** بإصدار `10+`.
- أداة **Git**.

### خطوات التثبيت والتشغيل:

1. **استنساخ المستودع (Clone):**
   ```bash
   git clone https://github.com/YOUR_ORGANIZATION/knoz-verification.git
   cd knoz-verification
   ```

2. **تثبيت الحزم التابعة:**
   ```bash
   npm install
   ```

3. **إعداد المتغيرات البيئية:**
   قومي بنسخ ملف النموذج إلى ملف `.env` محلي:
   ```bash
   cp .env.example .env
   ```
   ثم افتحي ملف `.env` وضعي القيم الحقيقية:
   ```env
   KNOZ_API_BASE_URL=https://knoz-api.knoz.online
   KNOZ_API_USERNAME=your_username_here
   KNOZ_API_PASSWORD=your_password_here
   ```

4. **تشغيل خادم التطوير:**
   ```bash
   npm run dev
   ```
   سيقوم الأمر ببناء ملفات التطبيق وتشغيل الخادم المحلي على الرابط:
   ```
   http://localhost:3000
   ```

5. **تجربة رابط شهادة حقيقي أو تجريبي:**
   افتحي المتصفح وانتقلي إلى:
   ```
   http://localhost:3000/B1A0G6D3H7
   ```

---

## 7. إعدادات النشر على السحابة (Vercel والخوادم الخاصة)

### الخيار الأول: النشر عبر Vercel (موصى به)

المشروع مهيأ بالكامل للعمل فوراً على منصة Vercel عبر مسار الدوال السحابية `api/verify.js`:

1. ارفعي الكود إلى حسابك على **GitHub**.
2. سجلي الدخول إلى منصة **[Vercel](https://vercel.com)** واضغطي **Add New Project**.
3. اختاري مستودع المشروع واضغطي **Import**.
4. من قسم **Environment Variables** (المتغيرات البيئية)، أضيفي المتغيرات التالية:
   - **`KNOZ_API_BASE_URL`**: الرابط الأساسي للـ API (`https://knoz-api.knoz.online`).
   - **`KNOZ_API_USERNAME`**: اسم المستخدم الخاص بالربط.
   - **`KNOZ_API_PASSWORD`**: كلمة المرور الخاصة بالربط.
5. اضغطي **Deploy**. ستتولى منصة Vercel بناء التطبيق تلقائياً وتفعيل مسار التحقق السحابي.

### الخيار الثاني: النشر على سيرفر خاص (VPS / Docker)

إذا أردتِ تشغيل المشروع على خادم خاص أو عبر Docker:

```bash
# بناء نسخة الإنتاج
npm run build

# تشغيل سيرفر الإنتاج
npm start
```
يقوم سيرفر `server.js` بالاستماع على المنفذ `3000` وخدمة الملفات الثابتة المبنية داخل مجلد `dist/` بالإضافة إلى توفير مسار الـ `/api/verify` المحمي.

---

## 8. معايير التطوير وجودة الكود

- **الاعتماد الكلي على Signals:** تفادي أي استخدام لـ `ngModel` أو مكتبات المراقبة الثقيلة، واستخدام `computed` لحساب النصوص واللغات ديناميكياً.
- **التصميم المتجاوب (Mobile First):** الواجهة مهيأة للعمل بانسيابية تامة على كافة أحجام الشاشات (الهواتف الذكية، الأجهزة اللوحية، والشاشات العريضة).
- **أمان السجلات (Zero Leakage):** ملف `.env` مستبعد تماماً في `.gitignore` لمنع تسريب بيانات الاعتماد إلى GitHub نهائياً.

---

## 9. خارطة الطريق والتطوير المستقبلي

- [ ] **تصدير الشهادة المباشر كملف PDF:** إضافة زر لتحميل نسخة رقمية موثقة من تفاصيل الاعتماد بنقرة واحدة.
- [ ] **المشاركة المباشرة عبر تطبيقات التواصل:** دعم واجهة `navigator.share` لمشاركة رابط التوثيق عبر واتساب وتيليجرام مباشرة من الهاتف.
- [ ] **لوحة تحكم إدارية لتوليد الـ QR:** شاشة مخصصة لإدارة الأكاديمية لإدخال أرقام الطلاب والحصول على الباركود والشفرة فورياً للطباعة.
- [ ] **دعم العمل دون اتصال (PWA):** تفعيل تخزين الكاش للشهادات المفتوحة مسبقاً في حال انقطاع الاتصال بالإنترنت.

---

## 10. المساهمة والترخيص

نرحب بأي تحسينات ومقترحات برمجية! للمساهمة:
1. أنشئي تفرعاً من المستودع (Fork).
2. أنشئي فرعاً لميزتك (`git checkout -b feature/new-verification-tool`).
3. سجلي التعديلات وفق معايير الرسائل الواضحة (`git commit -m 'feat: improve verification resilience'`).
4. ارفعي الفرع (`git push origin feature/new-verification-tool`).
5. افتحي طلب دمج (Pull Request).

**الترخيص:** هذا المشروع مرخص تحت رخصة **MIT**. جميع الحقوق محفوظة &copy; أكاديمية كنوز.
