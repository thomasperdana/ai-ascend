# AI Ascend

This is a Next.js application for AI Ascend, built with Next.js 15, Tailwind CSS, and shadcn/ui components.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deployment on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Deploy with Vercel

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import your project to Vercel: https://vercel.com/new
3. Vercel will detect that you're using Next.js and will set up the build configuration for you
4. Add the required environment variables:
   - `GOOGLE_API_KEY`: Your Google AI API key for Genkit

### Manual Deployment

If you prefer to deploy manually:

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Run the deployment command:
   ```bash
   vercel
   ```

3. Follow the prompts to set up your project
4. Add the required environment variables in the Vercel dashboard

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
GOOGLE_API_KEY=your_google_api_key_here
```

For production deployment, add these environment variables in the Vercel dashboard.
