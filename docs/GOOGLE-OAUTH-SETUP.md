# Google OAuth Setup Guide

This guide will help you set up Google OAuth authentication for BuyMeACoffee-Africa.

## Prerequisites

- A Google account
- Access to [Google Cloud Console](https://console.cloud.google.com/)

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top
3. Click "New Project"
4. Enter a project name (e.g., "BuyMeACoffee-Africa")
5. Click "Create"

## Step 2: Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click on it and then click "Enable"

## Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen"
2. Choose "External" user type (unless you have a Google Workspace account)
3. Click "Create"
4. Fill in the required information:
   - **App name**: BuyMeACoffee-Africa
   - **User support email**: Your email address
   - **Developer contact information**: Your email address
5. Click "Save and Continue"
6. On the "Scopes" page, click "Save and Continue"
7. On the "Test users" page (optional), add test users if needed
8. Click "Save and Continue"
9. Review and click "Back to Dashboard"

## Step 4: Create OAuth 2.0 Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Choose "Web application" as the application type
4. Enter a name (e.g., "BuyMeACoffee Web Client")
5. Add **Authorized JavaScript origins**:
   - For development: `http://localhost:5173`
   - For production: `https://yourdomain.com`
6. Add **Authorized redirect URIs**:
   - For development: `http://localhost:5173`
   - For production: `https://yourdomain.com`
7. Click "Create"
8. Copy the **Client ID** that appears

## Step 5: Configure Environment Variables

### Frontend (.env in root directory)

Add the Google Client ID to your `.env` file:

```env
VITE_GOOGLE_CLIENT_ID="your-google-client-id-here.apps.googleusercontent.com"
```

### Backend (apps/server/.env)

Add the Google Client ID to your backend `.env` file:

```env
GOOGLE_CLIENT_ID="your-google-client-id-here.apps.googleusercontent.com"
```

**Note**: The backend needs the Client ID to verify tokens (optional, for additional security).

## Step 6: Update Database Schema

Run the Prisma migration to add Google OAuth fields to the database:

```bash
cd apps/server
npx prisma migrate dev --name add-google-oauth
```

This will add the following fields to the User model:
- `googleId` (String, unique)
- `googleAvatarUrl` (String, nullable)

## Step 7: Test the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to the login page
3. Click the "Continue with Google" button
4. Sign in with your Google account
5. You should be redirected to the dashboard

## Troubleshooting

### "Access blocked: This app's request is invalid"

This error occurs when the OAuth consent screen is not properly configured:
- Ensure the OAuth consent screen is published (or in testing mode with test users added)
- Check that the redirect URIs match exactly

### "Invalid Client ID"

- Verify that the Client ID in your `.env` file matches the one in Google Cloud Console
- Ensure there are no extra spaces or quotes in the `.env` file
- Restart your development server after changing `.env` files

### "redirect_uri_mismatch"

- The redirect URI must exactly match one of the authorized redirect URIs in your OAuth client configuration
- Check for trailing slashes and http vs https
- For development, use `http://localhost:5173`
- For production, use your actual domain

### Google button is disabled

If the Google button appears disabled/grayed out:
- Check that `VITE_GOOGLE_CLIENT_ID` is set in your `.env` file
- Restart the development server (`npm run dev`)
- Clear your browser cache

## Security Notes

- **Never commit your `.env` file** to version control
- Use different OAuth clients for development and production
- Keep your Client ID and Client Secret secure
- Regularly review authorized users in the Google Cloud Console
- Consider implementing additional verification on the backend for production

## Additional Resources

- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [@react-oauth/google Documentation](https://www.npmjs.com/package/@react-oauth/google)
- [Google Cloud Console](https://console.cloud.google.com/)
