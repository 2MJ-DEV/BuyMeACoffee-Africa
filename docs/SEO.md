# SEO Implementation Guide

This document explains the SEO implementation for BuyMeACoffee-Africa and how to maintain it.

## Overview

BuyMeACoffee-Africa now includes comprehensive SEO optimization for:
- Search engine indexing (Google, Bing, etc.)
- Social media sharing (Facebook, Twitter/X, LinkedIn, WhatsApp)
- Per-page metadata management
- Multi-language support (English and French)

## Implementation Details

### 1. Base SEO Tags (index.html)

The `index.html` file contains default meta tags that apply to all pages:

- **Basic Meta Tags**: Description, keywords, author
- **Open Graph Tags**: For Facebook, LinkedIn, and other platforms
- **Twitter Card Tags**: For Twitter/X sharing
- **Canonical URL**: Main site URL
- **Robots Meta**: Indexing instructions
- **Theme Color**: Brand color for mobile browsers

### 2. Dynamic Per-Page SEO (React Helmet Async)

Each page can override the default meta tags with page-specific content using the `SEO` component.

#### Using the SEO Component

```jsx
import SEO from "../components/SEO";
import { getPageSEO } from "../utils/seo";
import { useI18n, FALLBACK_LANGUAGE } from "../context/I18nContext";

const MyPage = () => {
  const { language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('mypage', activeLanguage);

  return (
    <>
      <SEO {...seoData} />
      {/* Your page content */}
    </>
  );
};
```

### 3. SEO Utilities (`src/utils/seo.js`)

The `seo.js` utility file provides:

- **`getPageSEO(page, language)`**: Returns SEO data for a specific page
- **`getOrganizationStructuredData()`**: Returns JSON-LD structured data for the organization
- **`getWebPageStructuredData(seoData)`**: Returns JSON-LD structured data for a specific page

#### Adding a New Page

To add SEO for a new page:

1. Add the page data to `src/utils/seo.js`:

```javascript
myNewPage: {
  en: {
    title: "My New Page — BuyMeACoffee-Africa",
    description: "Description of my new page",
    keywords: "keywords, separated, by, commas",
    url: `${BASE_URL}/en/my-new-page`,
  },
  fr: {
    title: "Ma Nouvelle Page — BuyMeACoffee-Africa",
    description: "Description de ma nouvelle page",
    keywords: "mots-clés, séparés, par, virgules",
    url: `${BASE_URL}/fr/ma-nouvelle-page`,
  },
},
```

2. Import and use in your page component:

```jsx
const seoData = getPageSEO('myNewPage', activeLanguage);
return (
  <>
    <SEO {...seoData} />
    {/* Page content */}
  </>
);
```

### 4. Robots.txt

Location: `public/robots.txt`

The robots.txt file tells search engines:
- Which pages to index (Allow: /)
- Which pages to exclude (Disallow: /*/dashboard, /*/profile, /api/)
- Where to find the sitemap

**Note**: Private routes (dashboard, profile) are excluded from indexing for privacy.

### 5. Sitemap.xml

Location: `public/sitemap.xml`

The sitemap helps search engines discover all public pages. It includes:
- Homepage (with language alternatives)
- All public pages in English and French
- Change frequency and priority for each page
- Last modification dates

#### Updating the Sitemap

When adding new public pages:

1. Open `public/sitemap.xml`
2. Add entries for both English and French versions:

```xml
<url>
  <loc>https://buymeacoffeeafrica.vercel.app/en/new-page</loc>
  <lastmod>2025-11-03</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.7</priority>
</url>
```

3. Update the `lastmod` date to the current date

## SEO Best Practices

### Title Tags
- Keep titles under 60 characters
- Include the brand name
- Make them descriptive and unique per page

### Meta Descriptions
- Keep between 150-160 characters
- Include relevant keywords naturally
- Make them compelling to increase click-through rates

### Keywords
- Use 5-10 relevant keywords per page
- Focus on long-tail keywords
- Include location-based keywords (Africa, African, etc.)

### Images
- Use the `seo.png` (1200x630px) for social sharing
- Always include alt text for accessibility
- Optimize image file sizes

### URLs
- Use descriptive, readable URLs
- Include keywords when appropriate
- Keep URLs short and simple

## Testing Your SEO

### 1. Social Media Previews

Test how your links appear when shared:

- **Facebook/LinkedIn**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter/X**: [Twitter Card Validator](https://cards-dev.x.com/validator)
- **WhatsApp**: Simply share the link in a chat and preview it

### 2. Rich Results

Test if your structured data is valid:
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### 3. SEO Checkers

- [Google Search Console](https://search.google.com/search-console)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) (built into Chrome DevTools)

### 4. Local Testing

To test locally:

```bash
pnpm run build
pnpm run preview
```

Then visit:
- http://localhost:4173/robots.txt
- http://localhost:4173/sitemap.xml

## Troubleshooting

### Social media not showing updated preview

1. Clear the social media cache:
   - Facebook: Use the Sharing Debugger and click "Scrape Again"
   - Twitter: Use the Card Validator
   - LinkedIn: Use the Post Inspector

2. Make sure your meta tags are in the `<head>` section

3. Verify the image URL is publicly accessible

### Page not indexed by Google

1. Submit your sitemap to Google Search Console
2. Request indexing for specific URLs
3. Check robots.txt isn't blocking the page
4. Ensure there are internal links to the page

### Wrong page title showing

1. Check if the page has its own `<SEO>` component
2. Verify the `getPageSEO` function returns correct data
3. Clear browser cache and test in incognito mode

## Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Schema.org Documentation](https://schema.org/)

## Maintenance

- **Monthly**: Update lastmod dates in sitemap.xml
- **When adding pages**: Add entries to sitemap.xml and seo.js
- **Quarterly**: Review SEO performance in Google Search Console
- **As needed**: Update meta descriptions based on search performance

---

For questions or issues, please open an issue on GitHub or contact the maintainers.
