# API Setup Instructions

## Google Gemini AI Setup

To use the AI interview question generation feature, you need to set up a Google Gemini API key:

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Open the `.env` file in the project root
6. Replace `your_gemini_api_key_here` with your actual API key:
   ```
   VITE_GEMINI_API_KEY=your_actual_api_key_here
   ```
7. Restart the development server

## Important Notes

- Keep your API key secure and never commit it to version control
- The API key should start with "AIza..." 
- Make sure the `.env` file is listed in your `.gitignore`
- The Gemini API has usage limits and quotas

## Testing

After setting up the API key, you can test the functionality by:
1. Creating a new mock interview
2. Filling out the form with job details
3. Submitting the form to generate AI questions
