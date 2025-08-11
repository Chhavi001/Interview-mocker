# Interview Mocker - AI-Powered Mock Interview Platform

An advanced mock interview platform built with React, TypeScript, and AI to help you ace your next interview.

## 🚀 Features

- **AI-Generated Questions**: Get personalized interview questions based on job position and experience
- **Voice Recording**: Practice with speech-to-text functionality
- **Real-time Feedback**: Get instant feedback on your answers
- **Progress Tracking**: Monitor your interview performance over time
- **Authentication**: Secure user authentication with Clerk
- **Responsive Design**: Works seamlessly on desktop and mobile

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Radix UI
- **Authentication**: Clerk
- **Database**: Firebase Firestore
- **AI**: Google Gemini API
- **Voice Recognition**: react-hook-speech-to-text
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Chhavi001/Interview-mocker.git
cd Interview-mocker
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Fill in your environment variables:
- **VITE_CLERK_PUBLISHABLE_KEY**: Get from [Clerk Dashboard](https://dashboard.clerk.com/)
- **VITE_GEMINI_API_KEY**: Get from [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Firebase Config**: Get from your Firebase project settings

4. Start the development server:
```bash
pnpm run dev
```

## 📦 Deployment on Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**: Make sure your code is pushed to GitHub
2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
3. **Configure Environment Variables**:
   - Add all environment variables from your `.env` file
   - Make sure to exclude any test/development keys
4. **Deploy**: Vercel will automatically deploy your app

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Environment Variables for Production

Set these in your Vercel dashboard:

```
VITE_CLERK_PUBLISHABLE_KEY=your_production_clerk_key
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 🧪 Available Scripts

```bash
# Development
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── routes/             # Page components
├── layouts/            # Layout components
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── config/             # Configuration files
├── handlers/           # Authentication handlers
└── provider/           # Context providers
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Clerk](https://clerk.com/) for authentication
- [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Firebase](https://firebase.google.com/) for database
- [Vercel](https://vercel.com/) for hosting
