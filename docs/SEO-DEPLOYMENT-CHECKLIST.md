# SEO Deployment Checklist

This checklist should be completed after deploying the SEO implementation to production.

## Pre-Deployment Verification ✅

- [x] Build succeeds without errors
- [x] Linting passes
- [x] All pages have SEO component integration
- [x] robots.txt is accessible
- [x] sitemap.xml is accessible
- [x] Dynamic page titles are working
- [x] Code review completed
- [x] Security scan passed (CodeQL)

## Post-Deployment Tasks

### 1. Social Media Preview Testing

Test how your links appear when shared on each platform:

- [ ] **Facebook/LinkedIn**
  1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
  2. Enter: `https://buymeacoffeeafrica.vercel.app/`
  3. Click "Debug" and verify:
     - Image displays correctly (seo.png)
     - Title is correct
     - Description is compelling
  4. Test other important pages (login, register, contributors)
  5. Click "Scrape Again" if cached version is outdated

- [ ] **Twitter/X**
  1. Go to [Twitter Card Validator](https://cards-dev.x.com/validator)
  2. Enter: `https://buymeacoffeeafrica.vercel.app/`
  3. Click "Preview Card" and verify:
     - Card type is "Summary Card with Large Image"
     - Image displays correctly
     - Title and description are correct
  4. Test other pages

- [ ] **WhatsApp**
  1. Send a link in a WhatsApp chat (to yourself or a test contact)
  2. Verify the preview shows:
     - Correct image
     - Title
     - Description
  3. Test on both mobile and desktop WhatsApp

- [ ] **LinkedIn**
  1. Create a test post with your site URL
  2. Verify the preview appears correctly
  3. Delete the test post after verification

### 2. Search Engine Validation

- [ ] **Google Search Console**
  1. Go to [Google Search Console](https://search.google.com/search-console)
  2. Add property for `buymeacoffeeafrica.vercel.app`
  3. Verify ownership (use HTML tag method)
  4. Submit sitemap: `https://buymeacoffeeafrica.vercel.app/sitemap.xml`
  5. Request indexing for key pages:
     - Homepage
     - /en
     - /fr
     - /en/login
     - /en/register
     - /en/contributors

- [ ] **Google Rich Results Test**
  1. Go to [Rich Results Test](https://search.google.com/test/rich-results)
  2. Test your homepage URL
  3. Verify no errors
  4. Check if any structured data is detected

- [ ] **Bing Webmaster Tools** (Optional but recommended)
  1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
  2. Add and verify your site
  3. Submit sitemap

### 3. Performance & SEO Audits

- [ ] **Lighthouse Audit**
  1. Open Chrome DevTools (F12)
  2. Go to Lighthouse tab
  3. Run audit with:
     - Performance ✓
     - Accessibility ✓
     - Best Practices ✓
     - SEO ✓
  4. Target scores:
     - SEO: 100/100
     - Accessibility: 90+/100
     - Best Practices: 90+/100
  5. Address any critical issues

- [ ] **Mobile-Friendly Test**
  1. Go to [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
  2. Test your site URL
  3. Verify it passes

### 4. Robots.txt & Sitemap Verification

- [ ] Visit `https://buymeacoffeeafrica.vercel.app/robots.txt`
  - Verify it loads correctly
  - Check that private routes are blocked
  - Confirm sitemap URL is correct

- [ ] Visit `https://buymeacoffeeafrica.vercel.app/sitemap.xml`
  - Verify it loads correctly
  - Verify all pages are listed
  - Check date formats are valid

### 5. Meta Tags Verification

For each major page, verify meta tags in browser:

- [ ] **Homepage** (`/en`)
  - Right-click → View Page Source
  - Search for `<meta` tags
  - Verify:
    - Title is correct
    - Description is present
    - OG tags present
    - Twitter tags present
    - Canonical URL is correct

- [ ] **Repeat for other key pages:**
  - [ ] /en/login
  - [ ] /en/register  
  - [ ] /en/contributors
  - [ ] /fr (French homepage)

### 6. Analytics Setup (Recommended)

- [ ] **Google Analytics 4**
  1. Create GA4 property
  2. Add tracking code to site
  3. Verify data is being collected
  4. Set up key events (sign ups, logins)

- [ ] **Google Tag Manager** (Optional)
  1. Create GTM container
  2. Add GTM snippet to site
  3. Configure tags for analytics

### 7. Monitor & Maintain

- [ ] Set up weekly monitoring schedule
- [ ] Check Search Console for issues weekly
- [ ] Update sitemap dates monthly
- [ ] Review search rankings quarterly
- [ ] Update meta descriptions based on performance

## Common Issues & Solutions

### Issue: Social media showing old preview
**Solution:** Use the platform's debugging tool to clear cache (Facebook Debugger has "Scrape Again" button)

### Issue: Google not indexing pages
**Solution:** 
1. Check robots.txt isn't blocking
2. Submit URL manually in Search Console
3. Ensure page has internal links
4. Wait 1-2 weeks for natural crawling

### Issue: Wrong image in social preview
**Solution:**
1. Verify image URL is absolute (not relative)
2. Check image is publicly accessible
3. Ensure image is 1200x630 pixels (recommended)
4. File size should be under 8MB

### Issue: Missing meta tags
**Solution:**
1. Verify SEO component is imported
2. Check HelmetProvider is wrapping app
3. View page source (not inspector) to see server-rendered tags
4. Clear browser cache

## Success Criteria

Your SEO implementation is successful when:

- ✅ All pages have unique, descriptive titles
- ✅ Social media previews show correct image, title, description
- ✅ Site appears in Google search within 2 weeks
- ✅ Lighthouse SEO score is 100/100
- ✅ No errors in Search Console
- ✅ Mobile-friendly test passes
- ✅ robots.txt and sitemap.xml are accessible
- ✅ Core Web Vitals are good

## Support

For questions or issues:
1. Review `docs/SEO.md` for detailed documentation
2. Check GitHub issues for similar problems
3. Open a new issue with the `seo` label

---

Last Updated: 2025-11-03
