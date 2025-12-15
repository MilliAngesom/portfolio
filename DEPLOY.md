# Deployment Guide

Follow these steps to publish your portfolio website to the world!

## 1. Push to GitHub

I have already initialized the local Git repository and committed your files. Now you need to push it to GitHub.

1.  **Create a new repository** on GitHub: [https://github.com/new](https://github.com/new)
    *   Name it `portfolio` (or anything you like).
    *   Make it **Public**.
    *   **Do not** initialize with README, .gitignore, or license (we already have them).

2.  **Link your local repo**:
    Copy the commands shown by GitHub under "…or push an existing repository from the command line". They will look like this (replace `YOUR_USERNAME` with your actual GitHub username):

    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git branch -M main
    git push -u origin main
    ```

    Run these commands in your terminal here.

## 2. Deploy to Vercel

Vercel is the easiest way to host Next.js apps.

1.  Go to [Vercel](https://vercel.com) and sign up/login with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select your new `portfolio` repository from the list.
4.  Click **"Deploy"**.
    *   Vercel will automatically detect the settings (Next.js preset).
    *   No special environment variables are needed for the basic site.

## 3. Updates

Whenever you want to update your site (e.g., add a new project):

1.  Edit the files locally.
2.  Commit and push:
    ```bash
    git add .
    git commit -m "Added new project"
    git push
    ```
3.  Vercel will automatically detect the push and redeploy your site within seconds!
