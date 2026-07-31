# NyaVista — Every story. A clearer view.

NyaVista is an African-born AI news intelligence platform that brings reporting from multiple sources together and transforms complex stories into clear summaries, contextual insights, source comparisons, videos, audio, and visual explainers.

## Technology Stack
* **Framework**: Next.js (App Router, React 19, TypeScript strict mode)
* **Styling**: Tailwind CSS v4, custom brand CSS variables
* **Icons**: Lucide React & custom optimized SVGs
* **Persistence & Backend**: Firebase Authentication, Firestore, Storage, emulator suites
* **Validation**: Zod & React Hook Form
* **AI Abstraction**: Provider-neutral interfaces for LLM, TTS, Embeddings, and video scripts

---

## Getting Started

### 1. Prerequisites
Ensure you have Node.js 20+ installed.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Environment Setup
Copy the example environment file and fill in required fields:
```bash
cp .env.example .env
```
*(Refer to Environment Variables section below for options)*

### 4. Running Local Development Server
Launch the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Running the Firebase Emulator
```bash
firebase emulators:start
```

---

## Development and Verification Commands

* **Run Dev Server**: `npm run dev`
* **Linter**: `npm run lint`
* **Production Build**: `npm run build`
* **Start Production Server**: `npm run start`

---

## Environment Variables
Create a `.env` or `.env.local` file with the following variables:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=NyaVista

NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-client-email
FIREBASE_PRIVATE_KEY=your-private-key

LLM_PROVIDER=mock
LLM_API_KEY=
LLM_MODEL=

EMBEDDING_PROVIDER=mock
EMBEDDING_API_KEY=
EMBEDDING_MODEL=

TTS_PROVIDER=mock
TTS_API_KEY=

VIDEO_PROVIDER=mock
VIDEO_API_KEY=

STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

---

## Deployment
1. Build the Next.js production build:
   ```bash
   npm run build
   ```
2. Deploy to Firebase hosting or Vercel:
   ```bash
   npx firebase deploy
   ```

---

## Known Limitations
* Live AI and Stripe services are currently mocked for offline-first development.
* Multi-language support (French/English) is structured in route config but translation automation is pending future phases.
