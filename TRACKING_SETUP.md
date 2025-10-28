# Umami Analytics - Tracking Setup Complete

## ✅ Tracking Installed on All Websites

The Umami tracking script has been successfully added to all three websites.

---

## 📊 Websites Tracked

### 1. **Thrive Fit Cayman** (thrivefitcayman.com)
- **File**: `/home/chenry/projects/thrivefit-website/src/app/layout.tsx`
- **Location**: Added to `<head>` section (line 74)
- **Status**: ✅ Installed
- **Note**: Also has Vercel Analytics running alongside

### 2. **Moonlight Designs** (moonlightdesign.ai)
- **File**: `/home/chenry/projects/moonlightdesigns-web/src/app/layout.tsx`
- **Location**: Added to `<head>` section (line 98)
- **Status**: ✅ Installed

### 3. **ICT365** (ict365.ky)
- **File**: `/home/chenry/projects/ict365-website/app/layout.tsx`
- **Location**: Replaced Plausible with Umami in `<head>` (lines 35-40)
- **Status**: ✅ Installed (replaced Plausible)

---

## 🔧 Tracking Script Details

All three sites use the same tracking script:

```html
<script defer src="https://analytics.moonlightdesign.ai/script.js" data-website-id="20bb2869-f166-4684-b22e-cc3bb3432760"></script>
```

### Configuration:
- **Analytics URL**: https://analytics.moonlightdesign.ai
- **Website ID**: `20bb2869-f166-4684-b22e-cc3bb3432760`
- **Script Loading**: Deferred (non-blocking)
- **Privacy**: Cookie-free, GDPR compliant

---

## 🚀 Next Steps to Activate

### 1. Deploy the Changes

Each website needs to be deployed for the tracking to go live:

#### Thrive Fit Cayman:
```bash
cd /home/chenry/projects/thrivefit-website
vercel --prod
```

#### Moonlight Designs:
```bash
cd /home/chenry/projects/moonlightdesigns-web
vercel --prod
```

#### ICT365:
```bash
cd /home/chenry/projects/ict365-website
vercel --prod
```

### 2. Verify Tracking is Working

After deployment, you can verify tracking is active:

1. **Visit each website** from a different browser/device
2. **Check Umami Dashboard**: https://analytics.moonlightdesign.ai
3. Look for **real-time visitors** in the dashboard
4. Check that **page views** are being recorded

### 3. Optional: Test Tracking

Visit the websites and then check Umami:
- Click through different pages
- Check different sections
- Wait a few seconds for data to appear in Umami

---

## 📈 What You'll Track

Once deployed, you'll be able to see:

### Page Views & Sessions
- Total page views
- Unique visitors
- Bounce rate
- Average session duration

### Traffic Sources
- Direct traffic
- Referral sources
- Social media clicks
- Search engine traffic

### Visitor Information
- Country/region
- Browser type
- Device type (mobile/desktop/tablet)
- Operating system
- Screen resolution

### Page Performance
- Most popular pages
- Entry/exit pages
- User journey paths
- Real-time visitor activity

---

## 🔒 Privacy Features

Umami is privacy-focused:
- ✅ No cookies used
- ✅ No personal data collected
- ✅ GDPR compliant by default
- ✅ Respects Do Not Track
- ✅ All data stored in your own database

---

## 🛠️ Managing Analytics

### Access Your Dashboard
- **URL**: https://analytics.moonlightdesign.ai
- **Login**: Use the credentials you created (changed from admin/umami)

### View Website Stats
1. Login to Umami
2. Select a website from the dashboard
3. Choose date range
4. View detailed metrics

### Create Reports
1. Navigate to **Reports** in the sidebar
2. Create custom reports for specific metrics
3. Export data as needed

---

## 📝 Notes

### Website ID Configuration
- All three websites currently share the same `data-website-id`
- **IMPORTANT**: If you want to track them separately in Umami:
  1. Create individual website entries in Umami (Settings → Websites → Add website)
  2. Get unique IDs for each
  3. Update the `data-website-id` in each layout.tsx file

### Current Setup (Single ID)
- **Pros**: Simple unified analytics across all sites
- **Cons**: Can't separate traffic by domain

### Recommended Setup (Separate IDs)
- **Pros**: Individual analytics per website, easier to track performance
- **Cons**: Need to manage multiple website entries

---

## 🔧 Troubleshooting

### Analytics Not Showing Data

1. **Check deployment**: Ensure changes are deployed to production
2. **Check browser console**: Look for any script errors
3. **Verify script loading**: Open browser dev tools, check Network tab for script.js
4. **Ad blockers**: Umami may be blocked by some ad blockers (using a custom domain helps)

### Script Not Loading

1. **Check DNS**: Ensure analytics.moonlightdesign.ai resolves correctly
2. **Check SSL**: Verify HTTPS is working on analytics domain
3. **Check CORS**: Script should be accessible cross-origin

### Data Discrepancies

1. **Real-time delay**: Data may take a few seconds to appear
2. **Bot filtering**: Umami filters known bots automatically
3. **Do Not Track**: Users with DNT enabled won't be tracked

---

## 📚 Resources

- **Umami Dashboard**: https://analytics.moonlightdesign.ai
- **Umami Docs**: https://umami.is/docs
- **Tracking Code Docs**: https://umami.is/docs/track-events
- **Custom Events**: https://umami.is/docs/track-events#using-css-classes

---

## ✅ Deployment Checklist

Before tracking goes live, ensure:

- [x] Tracking script added to all three websites
- [ ] Changes committed to git
- [ ] Changes deployed to production
- [ ] Visited each website to test
- [ ] Verified data appears in Umami dashboard
- [ ] (Optional) Created separate website entries in Umami for individual tracking

---

**Status**: Tracking code installed, ready to deploy! 🚀
