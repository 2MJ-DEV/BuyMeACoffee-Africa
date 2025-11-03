import { Helmet } from "react-helmet-async";

/**
 * SEO Component - Manages page-specific meta tags for SEO and social sharing
 * @param {Object} props - Component props
 * @param {string} props.title - Page title
 * @param {string} props.description - Page description
 * @param {string} props.keywords - Page keywords (comma-separated)
 * @param {string} props.image - Social sharing image URL
 * @param {string} props.url - Canonical URL for the page
 * @param {string} props.type - Open Graph type (default: "website")
 * @param {string} props.locale - Page locale (default: "en_US")
 */
const SEO = ({
  title = "BuyMeACoffee-Africa — Support African talent",
  description = "BuyMeACoffee-Africa — Support African talent and bring their ideas to life.",
  keywords = "Africa, creators, support, donations, BuyMeACoffee, African talent",
  image = "https://buymeacoffeeafrica.vercel.app/seo.png",
  url = "https://buymeacoffeeafrica.vercel.app/",
  type = "website",
  locale = "en_US",
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="BuyMeACoffee-Africa" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
    </Helmet>
  );
};

export default SEO;
