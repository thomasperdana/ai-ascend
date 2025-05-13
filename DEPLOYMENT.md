# Deployment Guide for AI Ascend

This guide provides detailed instructions for deploying the AI Ascend application to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Your code pushed to a Git repository (GitHub, GitLab, or BitBucket)
- A Google AI API key for Genkit

## Deployment Steps

### 1. Prepare Your Project

Ensure your project has the following files:

- `vercel.json` - Configuration for Vercel deployment
- `.env.example` - Example environment variables
- `next.config.ts` - Next.js configuration

### 2. Deploy to Vercel

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [Vercel's New Project page](https://vercel.com/new)
2. Import your Git repository
3. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: npm run build
   - Output Directory: .next
4. Add environment variables:
   - `GOOGLE_API_KEY`: Your Google AI API key

5. Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to your project directory and run:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your deployment
4. Add environment variables when prompted or via the Vercel dashboard after deployment

### 3. Verify Deployment

1. Once deployed, Vercel will provide you with a URL to access your application
2. Test the application to ensure all features are working correctly
3. Check the Vercel logs if you encounter any issues

### 4. Custom Domain (Optional)

1. In the Vercel dashboard, go to your project settings
2. Navigate to the "Domains" section
3. Add your custom domain and follow the instructions to configure DNS settings

## Environment Variables

The following environment variables are required for the application to function properly:

- `GOOGLE_API_KEY`: Your Google AI API key for Genkit

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Check the Vercel build logs for specific error messages
2. Ensure all dependencies are correctly installed
3. Verify that your Next.js configuration is correct

### Runtime Errors

If the application deploys but doesn't function correctly:

1. Check that all environment variables are correctly set
2. Review the Vercel Function logs for any runtime errors
3. Test the application locally with the same environment variables

## Continuous Deployment

Vercel automatically sets up continuous deployment from your Git repository. Any changes pushed to your main branch will trigger a new deployment.

To change this behavior:

1. Go to your project settings in the Vercel dashboard
2. Navigate to the "Git" section
3. Modify the production branch or deployment settings as needed

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Environment Variables in Vercel](https://vercel.com/docs/concepts/projects/environment-variables)
