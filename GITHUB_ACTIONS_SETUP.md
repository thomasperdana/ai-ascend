# Setting Up GitHub Actions for Vercel Deployment

This guide will help you set up automatic deployments to Vercel using GitHub Actions.

## Prerequisites

1. A GitHub repository with your Next.js project
2. A Vercel account
3. Your project already imported into Vercel

## Steps to Set Up GitHub Actions with Vercel

### 1. Get a Vercel API Token

1. Go to your [Vercel account settings](https://vercel.com/account/tokens)
2. Click "Create" to generate a new token
3. Give it a name like "GitHub Actions Deployment"
4. Copy the token - you'll need it in the next step

### 2. Add the Vercel Token to GitHub Secrets

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Name: `VERCEL_TOKEN`
5. Value: Paste the Vercel token you copied
6. Click "Add secret"

### 3. Add Environment Variables to GitHub Secrets

1. Still in the GitHub repository secrets page
2. Add another secret:
   - Name: `GOOGLE_API_KEY`
   - Value: Your Google AI API key for Genkit
3. Click "Add secret"

### 4. Link Your Vercel Project

The GitHub Actions workflow needs to know which Vercel project to deploy to. You have two options:

#### Option A: Using vercel.json

Make sure your vercel.json file includes your project name:

```json
{
  "version": 2,
  "name": "your-project-name",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

#### Option B: Using a .vercel/project.json file

1. Install Vercel CLI locally: `npm i -g vercel`
2. Run `vercel link` to link your local project to Vercel
3. This will create a `.vercel/project.json` file
4. Commit this file to your repository

### 5. Commit and Push the GitHub Actions Workflow

The workflow file has already been created at `.github/workflows/vercel-deploy.yml`. Commit and push this file to your repository:

```bash
git add .github/workflows/vercel-deploy.yml
git commit -m "Add GitHub Actions workflow for Vercel deployment"
git push origin master
```

### 6. Verify the Deployment

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see the "Deploy to Vercel" workflow running
4. Once completed, your site will be deployed to Vercel

## Troubleshooting

If the workflow fails, check the following:

1. Verify that the `VERCEL_TOKEN` secret is correctly set in GitHub
2. Make sure your project is properly linked to Vercel
3. Check that the branch name in the workflow file matches your default branch
4. Review the workflow logs for specific error messages

## Additional Resources

- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
