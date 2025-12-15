# Deployment & Verification Guide

## 1. Push to GitHub

1.  **Create a new public repository** on GitHub (name it `portfolio`).
2.  Run the following commands in your terminal:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git branch -M main
    git push -u origin feature/contact-jsonld-github-accessibility:main
    ```

## 2. Deploy to Vercel

1.  Go to [Vercel](https://vercel.com).
2.  Import your `portfolio` repository.
3.  Click **Deploy**.
4.  **Domain**: Ensure your Vercel project is named `millionangesom` so the URL matches `millionangesom.vercel.app`.

## 3. Post-Deployment Verification

### Contact Form
1.  Go to `/contact`.
2.  Fill out the form and submit.
3.  **Action Required**: The first time you submit, you (million.angesom1994@gmail.com) will receive an activation email from FormSubmit.co. **You MUST click the specific link in that email to activate the form.**
4.  After activation, verify that submitting redirects to `/contact?success=1`.

### Updates to Check
-   **Timeline**: Check `/about` page for the new academic timeline.
-   **Dark Mode**: Toggle the moon/sun icon in the header.
-   **GitHub**: Check `/projects` to see your top starred repos.
-   **SEO**: Inspect source code to see `application/ld+json` and `og:image`.

## 4. Build Test

I have run `npm run build` locally to verify correctness.
