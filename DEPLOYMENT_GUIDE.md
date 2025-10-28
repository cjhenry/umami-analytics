# Umami Analytics Deployment Guide

## Project Setup Complete

Your Umami Analytics has been forked and deployed to Vercel!

- **GitHub Repository**: https://github.com/cjhenry/umami-analytics
- **Vercel Project**: umami-analytics (cjhenrys-projects)
- **Temporary URL**: https://umami-analytics-lble6dnuy-cjhenrys-projects.vercel.app

## Next Steps to Complete Deployment

### 1. Create PostgreSQL Database on Vercel

1. Go to [Vercel Dashboard](https://vercel.com/cjhenrys-projects/umami-analytics)
2. Click on the **Storage** tab
3. Click **Create Database**
4. Select **Postgres** (powered by Neon)
5. Name it: `umami-analytics-db`
6. Click **Create**

The `DATABASE_URL` and `POSTGRES_PRISMA_URL` environment variables will be automatically added to your project.

### 2. Add APP_SECRET Environment Variable

1. In the Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add a new variable:
   - **Key**: `APP_SECRET`
   - **Value**: `99bd7b1d7e38e4461a8a82c4b549afa99b5d0fddd9add4d07b46afb1b0e755d4`
   - **Environment**: Production, Preview, Development (check all three)
3. Click **Save**

### 3. Redeploy the Application

After adding the database and environment variables:

1. Go to the **Deployments** tab
2. Click the three dots (...) on the latest deployment
3. Click **Redeploy**
4. Wait for the build to complete

OR run from the command line:
```bash
cd /home/chenry/projects/umami-analytics
vercel --prod
```

### 4. Add Custom Domain

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add**
3. Enter: `analytics.moonlightdesign.ai`
4. Click **Add**
5. Vercel will show you the DNS records to configure

### 5. Configure DNS

At your domain provider (for moonlightdesign.ai):

Add a CNAME record:
- **Name**: `analytics`
- **Value**: `cname.vercel-dns.com`
- **TTL**: Auto or 3600

### 6. Initial Login and Setup

Once deployed successfully:

1. Visit: `https://analytics.moonlightdesign.ai` (or the Vercel URL initially)
2. Login with default credentials:
   - **Username**: `admin`
   - **Password**: `umami`
3. **IMPORTANT**: Change the password immediately!
4. Go to **Settings** → **Profile** → **Change Password**

### 7. Create Website Tracking

1. In Umami dashboard, click **Settings** → **Websites**
2. Click **Add website**
3. Enter:
   - **Name**: ICT365.ky
   - **Domain**: ict365.ky
   - **Enable Share URL**: (optional)
4. Click **Save**
5. Copy the **Tracking Code** provided

### 8. Add Tracking to ICT365 Website

The tracking code will look like this:

```html
<script defer src="https://analytics.moonlightdesign.ai/script.js" data-website-id="YOUR-WEBSITE-ID"></script>
```

Add this to your ICT365 website's layout file.

## Environment Variables Summary

| Variable | Value |
|----------|-------|
| `DATABASE_URL` | Auto-populated by Vercel Postgres |
| `POSTGRES_PRISMA_URL` | Auto-populated by Vercel Postgres (use this one) |
| `APP_SECRET` | `99bd7b1d7e38e4461a8a82c4b549afa99b5d0fddd9add4d07b46afb1b0e755d4` |

## Troubleshooting

### Build Fails
- Ensure `DATABASE_URL` or `POSTGRES_PRISMA_URL` is set
- Ensure `APP_SECRET` is set
- Check build logs in Vercel dashboard

### Database Connection Issues
- Verify the database was created successfully
- Check that environment variables are set for Production, Preview, and Development
- Redeploy after adding environment variables

### Domain Not Working
- Wait for DNS propagation (can take up to 48 hours, usually minutes)
- Verify CNAME record is correct
- Check Vercel domain status in dashboard

## Resources

- [Umami Documentation](https://umami.is/docs)
- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Umami Running on Vercel Guide](https://umami.is/docs/guides/running-on-vercel)

## Local Development

To run locally:

1. Pull environment variables:
   ```bash
   vercel env pull .env.local
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run development server:
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000`
