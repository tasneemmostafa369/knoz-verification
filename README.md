# Knoz Certificate Verification Portal

<div align="center">

  <img src="public/assets/logo.jpeg" alt="Knoz Academy Logo" width="120" height="120" style="border-radius: 50%; border: 3px solid #C8A559; margin-bottom: 16px;" />

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

- [ Part 1: English Documentation](#-part-1-english-documentation)
  - [1. Executive Overview](#1-executive-overview)
  - [2. Key Features & Security Highlights](#2-key-features--security-highlights)
  - [3. Architecture & Technical Stack](#3-architecture--technical-stack)
  - [4. Proprietary Verification Token Protocol](#4-proprietary-verification-token-protocol)
  - [5. Project Directory & File Structure](#5-project-directory--file-structure)
  - [6. Getting Started & Installation](#6-getting-started--installation)
  - [7. Production Deployment (Vercel & Self-Hosted)](#7-production-deployment-vercel--self-hosted)
  - [8. Engineering Best Practices & Standards](#8-engineering-best-practices--standards)
  - [9. Product Roadmap](#9-product-roadmap)
  - [10. Contributing & License](#10-contributing--license)
---

# Part 1: English Documentation

## 1. Executive Overview

The **Knoz Certificate Verification Portal** is an ultra-fast, highly secure web application engineered for **Knoz Academy (أكاديمية كنوز)**. Its primary mission is to authenticate and present academic graduation credentials, course accomplishments, teacher credentials, and attendance records for students when dynamic QR codes on physical or digital certificates are scanned.

Built on **Angular 21** with a **Zoneless Signal-based architecture**, styled with **Tailwind CSS v4**, and backed by an isolated **Serverless / Reverse-Proxy Gateway**, the portal ensures:
- **Zero API Credential Exposure:** End users and client browsers never see internal authentication tokens, remote server addresses, or database identifiers.
- **Client-Side Anti-Tamper Verification:** A proprietary token validator audits incoming verification requests instantly before contacting the backend.
- **Bilingual Fluidity:** Seamless, instantaneous switching between Arabic (RTL) and English (LTR) without page reloads.
- **Visual Prestige:** An academic luxury aesthetic combining Emerald Green (`#0F392B`), Royal Gold (`#C8A559`), and warm cream tones with micro-animations.

---

## 2. Key Features & Security Highlights

### 🛡️ 1. Anti-Tamper Link Validation
- URLs generated via QR codes carry encoded academic verification tokens.
- The client engine validates token authenticity and structural integrity immediately upon navigation.
- If a link has been altered, forged, or improperly constructed, the portal displays a dedicated **"Invalid Verification Link"** shield screen without generating unnecessary server load.

### 🔒 2. Zero-Leakage Secure Backend Proxy
- The browser client connects only to the internal endpoint `/api/verify?sspId=...`.
- All interactions with the central academic API are performed server-side:
  - Token-based authentication using environment credentials.
  - Complete abstraction of upstream endpoints, hostnames, and credentials.
  - Safe error handling that never leaks server stack traces or internal network topology.

### 🌐 3. Real-Time Localization (RTL / LTR)
- Built-in dictionary covering all verification states, labels, and error notices in **Arabic** and **English**.
- Automatic document direction switching (`dir="rtl"` / `dir="ltr"`).
- Localized date formatting, 12-hour timetable scheduling (`ص / م` vs `AM / PM`), and Arabic day-name resolution.

### 📊 4. Bento-Box Academic Dashboard
- **Official Golden Seal:** Dynamic animated seal reflecting verified status.
- **Honoree Spotlight:** Dedicated display tailored for student full names with adaptive typography.
- **Course & Academic Package:** Highlighting course title, specialization, and learning track.
- **Faculty Accountability:** Dedicated instructor profile card alongside educational supervisor details.
- **Curriculum Metrics:** Session counts, individual session duration, and connected calendar timeline.

---

## 3. Architecture & Technical Stack

```
+-----------------------------------------------------------------------------------------+
|                                    CLIENT BROWSER                                       |
|                                                                                         |
|   +-----------------------+     +------------------------+     +--------------------+   |
|   | Angular 21 Standalone | --> |   Token Integrity Check| --> | VerificationService|   |
|   | Component & Signals   |     |  (Client-side Shield)  |     |  (Internal Proxy)  |   |
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
|       | 1. Read environment variables (Base URL & service credentials)          |       |
|       | 2. Authenticate securely with central academic services                 |       |
|       | 3. Query certificate records for the requested identifier               |       |
|       | 4. Return sanitized verification payload to Angular frontend            |       |
|       +-------------------------------------------------------------------------+       |
+-----------------------------------------------------------------------------------------+
                                            |
                                            | Private Secure Protocol
                                            v
+-----------------------------------------------------------------------------------------+
|                         CENTRAL ACADEMIC SERVICE BACKEND                                |
+-----------------------------------------------------------------------------------------+
```

### Technical Stack Matrix

| Domain | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **Angular** | `21.2.0` | Standalone components, Zoneless change detection, Signals. |
| **Language & Typings** | **TypeScript** | `~5.9.2` | Strict mode typing for reliable execution. |
| **Styling Engine** | **Tailwind CSS** | `^4.1.12` | Modern styling via `@tailwindcss/postcss`. |
| **Iconography & Fonts** | **FontAwesome + Google Fonts** | `^7.3.1` | Web typography (`Amiri` and `Tajawal`) and vector icons. |
| **Server Runtime** | **Node.js / Express** | `20+` / `5.2.1` | Application serving and internal proxy endpoint. |
| **Serverless Engine** | **Vercel Functions** | ES Modules | Edge-ready serverless execution for `/api/verify`. |

---

## 4. Proprietary Verification Token Protocol

To ensure academic certificates cannot be easily enumerated or guessed:

- **Tokenized Identifiers:** QR codes do not expose plain database IDs; they contain an encoded verification token.
- **Client Integrity Validation:** The application performs preliminary cryptographic integrity checks before contacting the server.
- **Tamper Protection:** If an invalid or modified token is detected, the request is halted immediately at the browser level, safeguarding upstream infrastructure against automated fuzzing.

*(Note: For security reasons, the underlying token algorithms and internal dictionary structures are proprietary and intentionally omitted from public documentation.)*

---

## 5. Project Directory & File Structure

```
knoz-verification/
├── api/
│   └── verify.js                     # Secure backend proxy handler (Vercel Serverless Function)
├── public/
│   ├── assets/
│   │   └── logo.jpeg                 # Official Knoz Academy brand logo
│   └── favicon.ico                   # Application browser favicon
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── mock/
│   │   │   │   └── dictionary.ts     # Bilingual dictionary (Arabic / English)
│   │   │   ├── services/
│   │   │   │   └── verification.service.ts # Frontend HTTP verification service
│   │   │   └── utils/
│   │   │       └── ssp-cipher.ts     # Client-side verification token validation logic
│   │   ├── features/
│   │   │   └── certificate-verification/
│   │   │       ├── certificate-verification.html # Academic verification dashboard template
│   │   │       └── certificate-verification.ts   # Component view model and state management
│   │   ├── app.config.ts             # Application configuration and routing providers
│   │   ├── app.html                  # Root template container
│   │   ├── app.routes.ts             # Application routes (supports dynamic verification links)
│   │   └── app.ts                    # Root standalone component
│   ├── index.html                    # Application HTML shell and font links
│   ├── main.ts                       # Application entry point (Zoneless)
│   └── styles.css                    # Tailwind CSS imports and theme configuration
├── .env.example                      # Template for required environment variables (no secrets)
├── .gitignore                        # Git ignore rules protecting .env and build files
├── angular.json                      # Angular workspace configuration
├── package.json                      # Project dependencies and npm scripts
├── server.js                         # Production Express server with proxy and static serving
├── tsconfig.app.json                 # TypeScript compiler options for the application
└── tsconfig.json                     # Base TypeScript configuration
```

---

## 6. Getting Started & Installation

### Prerequisites
- **Node.js**: `v20.12.0` or higher
- **npm**: `v10+`
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
   Create a local `.env` file based on the example template:
   ```bash
   cp .env.example .env
   ```
   Fill in your service configuration securely in `.env`:
   ```env
   KNOZ_API_BASE_URL=https://your-api-domain.example.com
   KNOZ_API_USERNAME=your_service_username
   KNOZ_API_PASSWORD=your_service_password
   ```

4. **Start Development Server:**
   ```bash
   npm run dev
   ```
   The portal will compile and start on:
   ```
   http://localhost:3000
   ```

---

## 7. Production Deployment (Vercel & Self-Hosted)

### Deployment Option A: Vercel (Recommended)

1. Push your repository to **GitHub**.
2. Go to **[Vercel](https://vercel.com)** and import the project repository.
3. In **Project Settings > Environment Variables**, add:
   - `KNOZ_API_BASE_URL`: Your backend API base URL
   - `KNOZ_API_USERNAME`: Your authorized service username
   - `KNOZ_API_PASSWORD`: Your authorized service password
4. Click **Deploy**. Vercel will handle the build automatically.

### Deployment Option B: Self-Hosted Node.js Server

```bash
# 1. Build production assets
npm run build

# 2. Start the Express server
npm start
```
The server will run on port `3000` (or the configured `PORT`), securely serving the Angular build and handling `/api/verify` requests.

---

## 8. Engineering Best Practices & Standards

- **Zero-Secret Commitment:** All API endpoints and credentials remain strictly on the server and are excluded from source control.
- **Zoneless Signal Reactivity:** High performance and minimal bundle footprint by leveraging Angular 21 native Signals.
- **Client-Side Defense:** Early rejection of malformed tokens saves server bandwidth and compute resources.

---

## 9. Product Roadmap

- [ ] One-click PDF download for verified credentials.
- [ ] Native mobile sharing via Web Share API.
- [ ] Offline PWA caching for authenticated certificates.

---

## 10. Contributing & License

Contributions are welcome via standard Pull Requests. Please ensure clean commit messages.

**License:** Licensed under the **MIT License**. Copyright &copy; Knoz Academy.

---
---

#  الجزء الثاني: دليل التوثيق باللغة العربية

- [ الجزء الثاني: دليل التوثيق باللغة العربية](#-الجزء-الثاني-دليل-التوثيق-باللغة-العربية)
  - [1. نظرة عامة ورؤية المنصة](#1-نظرة-عامة-ورؤية-المنصة)
  - [2. الميزات الرئيسية والأمان المؤسسي](#2-الميزات-الرئيسية-والأمان-المؤسسي)
  - [3. المعمارية الهندسية وحزمة التقنيات](#3-المعمارية-الهندسية-وحزمة-التقنيات)
  - [4. بروتوكول التحقق الأمني من الرموز](#4-بروتوكول-التحقق-الأمني-من-الرموز)
  - [5. الهيكل التنظيمي للملفات والمجلدات](#5-الهيكل-التنظيمي-للملفات-والمجلدات)
  - [6. دليل التثبيت والتشغيل المحلي](#6-دليل-التثبيت-والتشغيل-المحلي)
  - [7. إعدادات النشر على السحابة (Vercel والخوادم الخاصة)](#7-إعدادات-النشر-على-السحابة-vercel-والخوادم-الخاصة)
  - [8. معايير التطوير وجودة الكود](#8-معايير-التطوير-وجودة-الكود)
  - [9. خارطة الطريق والتطوير المستقبلي](#9-خارطة-الطريق-والتطوير-المستقبلي)
  - [10. المساهمة والترخيص](#10-المساهمة-والترخيص)

---
## 1. نظرة عامة ورؤية المنصة

**بوابة التحقق الإلكتروني من الشهادات (Knoz Certificate Verification Portal)** هي منظومة ويب مؤسسية فائقة السرعة وعالية الأمان، صُممت خصيصاً لصالح **أكاديمية كنوز**. الهدف الأساسي من المنظومة هو توفير وسيلة موثوقة وفورية للتحقق من صحة الشهادات الأكاديمية الصادرة من الأكاديمية، وعرض تفاصيل إتمام الدورات، وبيانات المعلمين، والمشرفين، وسجل الحصص الأسبوعية عند مسح رمز الاستجابة السريعة (QR Code) المطبوع على الشهادة.

تم بناء البوابة بالاعتماد على أحدث إصدارات إطار العمل **Angular 21** بنظام **الإشارات التفاعلية (Signals)** الخالي تماماً من مكتبة Zone.js التقليدية (**Zoneless Architecture**)، مع واجهة بصرية مصممة بأحدث معايير **Tailwind CSS v4**، وخادم وسيط آمن لحماية البيانات الحساسة (**Reverse Proxy Gateway**).

### ركائز المنظومة:
- **حماية تامة للبيانات والاعتمادات:** عدم كشف أي مفاتيح سرية، أو روابط خوادم داخلية، أو معرفات قواعد البيانات للمتصفح أو في مستودع الكود العام.
- **فحص أمني للروابط على طرف العميل:** فحص ذاتي للرابط قبل إجراء أي اتصال بالسيرفر لمنع التلاعب وحماية الخوادم من الاستعلامات العشوائية.
- **دعم كامل للغتين (العربية والإنجليزية):** تجربة مستخدم فورية تتبدل بين واجهة RTL و LTR بضغطة زر وبدون إعادة تحميل الصفحة.
- **هوية بصرية أكاديمية فاخرة:** تصميم راقٍ يجمع بين اللون الأخضر الملكي للأكاديمية (`#0F392B`) والذهب الأنيق (`#C8A559`)، مع ختم ذهبي تفاعلي وتنسيق بطاقات بينتو الحديثة (Bento-Box).

---

## 2. الميزات الرئيسية والأمان المؤسسي

### 🛡️ 1. الحماية الاستباقية من الروابط التالفة أو المعدلة
- روابط الـ QR تحتوي على رموز توثيق معتمدة تحمي المعرفات الحقيقية من الظهور المباشر.
- تفحص الواجهة سلامة هيكل الرابط فور فتحه؛ وإذا كان الرابط غير صالح أو تم التلاعب برموزه، تظهر للمستخدم فوراً صفحة حماية مخصصة **"رابط غير صالح"** دون استهلاك أي موارد من الخادم.

### 🔒 2. معمارية الخادم الوسيط والحماية القصوى (Zero-Leakage Proxy)
- يتواصل المتصفح حصراً مع مسار داخلي `/api/verify?sspId=...`.
- يتولى السيرفر في الخلفية إجراء عملية الاتصال بالأنظمة الأكاديمية وجلب بيانات الشهادة:
  - إدارة الاتصال عبر متغيرات البيئة السرية (`KNOZ_API_BASE_URL` و `KNOZ_API_USERNAME` و `KNOZ_API_PASSWORD`).
  - عزل الروابط الحقيقية للخوادم والواجهات البرمجية عن شبكة المتصفح تماماً.

### 🌐 3. محرك الترجمة الفورية وثنائية اللغة
- قاموس نصوص داخلي متكامل يدعم اللغتين العربية والإنجليزية.
- تبديل مباشر لاتجاه الصفحة (`dir="rtl"` و `dir="ltr"`).
- مواءمة كاملة لصيغ التواريخ ومواعيد الحصص وأسماء الأيام وتنسيق الوقت بصيغة 12 ساعة (`ص / م` للعربية و `AM / PM` للإنجليزية).

### 📊 4. لوحة تفاصيل أكاديمية متكاملة (Bento-Box Grid)
- **الختم الأكاديمي الذهبي:** حركة دخول تفاعلية تحاكي ختم الاعتماد الرسمي مع تأثير نبض ذهبي.
- **بطاقة اسم الطالب المكرّم:** مساحة عريضة تتكيف تلقائياً مع الأسماء الطويلة والمركبة.
- **تفاصيل الدورة والمادة:** عرض اسم الباقة الدراسية والمادة التخصصية مع أيقونات توضيحية.
- **بطاقات الكادر التعليمي:** بطاقة مميزة للمعلم/المعلمة مع بطاقة مخصصة لمشرف/مشرفة المسار.
- **مؤشرات الحصص والمدة:** شريط يوضح عدد الحصص الكلي ومدة الحصة بالدقائق مع خط زمني للدورة.

---

## 3. المعمارية الهندسية وحزمة التقنيات

### جدول حزمة التقنيات البرمجية

| المجال | التقنية المستخدمة | الإصدار | الوظيفة والدور الهندسي |
| :--- | :--- | :--- | :--- |
| **إطار عمل الواجهة** | **Angular** | `21.2.0` | مكونات مستقلة (Standalone)، إدارة الحالة عبر الإشارات (Signals)، كشف تغيير سريع بدون Zone.js. |
| **لغة البرمجة** | **TypeScript** | `~5.9.2` | نمط برمجي صارم وخالٍ من الأخطاء التشغيلية. |
| **محرك التنسيق** | **Tailwind CSS** | `^4.1.12` | أحدث جيل من تيلويند باستخدام محرك PostCSS وتطبيق متغيرات ألوان الأكاديمية. |
| **الأيقونات والخطوط** | **FontAwesome + Google Fonts** | `^7.3.1` | خطوط عربية متميزة (خط **الأميري** للعناوين و**تجوّل** للنصوص). |
| **خادم التطوير والإنتاج** | **Express.js / Node.js** | `5.2.1` / `20+` | خادم Full-Stack لاستضافة التطبيق وتوفير مسار الـ Proxy الآمن. |
| **الدوال السحابية** | **Vercel Serverless** | ES Modules | تشغيل دالة التحقق الخلفية سحابياً عبر `/api/verify.js`. |

---

## 4. بروتوكول التحقق الأمني من الرموز

لضمان سلامة الشهادات الأكاديمية وعدم إمكانية تخمين أرقامها أو التلاعب بها:

- **رموز التحقق المشفرة:** روابط الشهادات لا تتضمن أرقام السجلات المباشرة، بل تعتمد على رموز مشفرة لحماية الخصوصية.
- **الفحص الهيكلي السريع:** يقوم التطبيق بالتأكد من صحة الرمز أمنياً قبل مخاطبة السيرفر.
- **مقاومة التخمين العشوائي:** أي رمز غير متطابق مع معايير الأكاديمية يتم رفضه فوراً من المتصفح لحماية السيرفر من المحاولات العشوائية.

*(ملاحظة أمنية: يتم الاحتفاظ بتفاصيل الخوارزمية الداخلية وقواعد التشفير الخاصة بالنظام بشكل سري وغير معلن لحماية خصوصية وأمان الشهادات).*

---

## 5. الهيكل التنظيمي للملفات والمجلدات

```
knoz-verification/
├── api/
│   └── verify.js                     # دالة Vercel Serverless الخلفية لتأمين الاتصال بالـ API
├── public/
│   ├── assets/
│   │   └── logo.jpeg                 # الشعار الرسمي المعتمد لأكاديمية كنوز
│   └── favicon.ico                   # أيقونة الموقع للمتصفح
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── mock/
│   │   │   │   └── dictionary.ts     # قاموس النصوص للغتين العربية والإنجليزية
│   │   │   ├── services/
│   │   │   │   └── verification.service.ts # خدمة الاتصال البرمجية للواجهة
│   │   │   └── utils/
│   │   │       └── ssp-cipher.ts     # منطق فحص سلامة رمز التحقق
│   │   ├── features/
│   │   │   └── certificate-verification/
│   │   │       ├── certificate-verification.html # قالب الواجهة وبطاقات التفاصيل والختم الذهبي
│   │   │       └── certificate-verification.ts   # إدارة الحالة التفاعلية للمكون (Signals)
│   │   ├── app.config.ts             # إعدادات التطبيق وتوفير مسارات التوجيه
│   │   ├── app.html                  # حاوية التوجيه الجذرية
│   │   ├── app.routes.ts             # مسارات التوجيه للشهادات
│   │   └── app.ts                    # المكون الرئيسي للتطبيق
│   ├── index.html                    # ملف الـ HTML الرئيسي مع خطوط جوجل
│   ├── main.ts                       # نقطة انطلاق التطبيق بدون Zone.js
│   └── styles.css                    # إعدادات Tailwind CSS والمتغيرات اللونية الخاصة
├── .env.example                      # نموذج للمتغيرات البيئية خالٍ من الأسرار
├── .gitignore                        # استبعاد ملفات البيئة من الرفع لـ Git
├── angular.json                      # إعدادات بناء Angular
├── package.json                      # الحزم والتبعيات والأوامر البرمجية
├── server.js                         # سيرفر Express للتشغيل المحلي والإنتاج
├── tsconfig.app.json                 # إعدادات TypeScript للواجهة
└── tsconfig.json                     # إعدادات TypeScript العامة
```

---

## 6. دليل التثبيت والتشغيل المحلي

### المتطلبات الأساسية
- بيئة **Node.js** بإصدار `20.12.0` أو أحدث.
- مدير الحزم **npm** بإصدار `10+`.
- أداة **Git**.

### خطوات التشغيل:

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
   انسخي ملف النموذج إلى ملف `.env`:
   ```bash
   cp .env.example .env
   ```
   ثم ضعي بيانات الربط الخاصة بك في ملف `.env`:
   ```env
   KNOZ_API_BASE_URL=https://your-api-domain.example.com
   KNOZ_API_USERNAME=your_username_here
   KNOZ_API_PASSWORD=your_password_here
   ```

4. **تشغيل خادم التطوير:**
   ```bash
   npm run dev
   ```
   سيعمل التطبيق محلياً على:
   ```
   http://localhost:3000
   ```

---

## 7. إعدادات النشر على السحابة (Vercel والخوادم الخاصة)

### الخيار الأول: النشر عبر Vercel (موصى به)

1. ارفعي الكود إلى مستودعك على **GitHub**.
2. توجهي إلى **[Vercel](https://vercel.com)** واضغطي **Add New Project**.
3. في قسم **Environment Variables** (المتغيرات البيئية)، أضيفي:
   - **`KNOZ_API_BASE_URL`**: الرابط الأساسي للخدمة
   - **`KNOZ_API_USERNAME`**: اسم المستخدم المعتمد
   - **`KNOZ_API_PASSWORD`**: كلمة المرور المعتمدة
4. اضغطي **Deploy**. ستتولى منصة Vercel بناء التطبيق وتفعيل الدالة السحابية تلقائياً.

### الخيار الثاني: النشر على سيرفر خاص (VPS / Docker)

```bash
# بناء نسخة الإنتاج
npm run build

# تشغيل السيرفر
npm start
```

---

## 8. معايير التطوير وجودة الكود

- **حماية الأسرار:** لا يتم تضمين أي مفاتيح أو روابط حقيقية في الكود المصدري نهائياً.
- **الأداء الفائق:** استغناء كامل عن المكتبات الثقيلة والاعتماد على Angular Signals و Tailwind CSS v4.

---

## 9. خارطة الطريق والتطوير المستقبلي

- [ ] دعم تصدير الشهادة كملف PDF موثق.
- [ ] المشاركة المباشرة عبر تطبيقات التواصل بالهاتف.
- [ ] دعم التخزين المؤقت في حال انقطاع الاتصال (PWA).

---

## 10. المساهمة والترخيص

المشروع مرخص تحت رخصة **MIT**. جميع الحقوق محفوظة &copy; أكاديمية كنوز.
