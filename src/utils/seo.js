/**
 * SEO Utility functions for generating page-specific meta data
 */

const BASE_URL = "https://buymeacoffeeafrica.vercel.app";
const DEFAULT_IMAGE = `${BASE_URL}/seo.png`;

/**
 * Get SEO data for a specific page
 * @param {string} page - Page identifier
 * @param {string} language - Current language (en, fr, etc.)
 * @returns {Object} SEO data object
 */
export const getPageSEO = (page, language = "en") => {
  // Warn developers if using an invalid page key
  const validPages = ['home', 'contributors', 'login', 'register', 'guide', 'dashboard', 'profile', 'privacy', 'terms', 'license'];
  if (!validPages.includes(page)) {
    console.warn(`[SEO] Invalid page key "${page}". Falling back to home page SEO data. Valid pages: ${validPages.join(', ')}`);
  }

  const seoData = {
    home: {
      en: {
        title: "BuyMeACoffee-Africa — Support African talent",
        description: "Support African creators, artists, developers, and entrepreneurs through Mobile Money services like Airtel Money, Orange Money, and M-Pesa.",
        keywords: "Africa, creators, support, donations, BuyMeACoffee, African talent, Mobile Money, M-Pesa, Airtel Money, Orange Money",
        url: `${BASE_URL}/en`,
      },
      fr: {
        title: "BuyMeACoffee-Africa — Soutenez les talents africains",
        description: "Soutenez les créateurs, artistes, développeurs et entrepreneurs africains via les services Mobile Money comme Airtel Money, Orange Money et M-Pesa.",
        keywords: "Afrique, créateurs, soutien, dons, BuyMeACoffee, talents africains, Mobile Money, M-Pesa, Airtel Money, Orange Money",
        url: `${BASE_URL}/fr`,
      },
    },
    contributors: {
      en: {
        title: "Contributors — BuyMeACoffee-Africa",
        description: "Meet the amazing contributors who are building BuyMeACoffee-Africa, a platform to support African talent.",
        keywords: "contributors, open source, developers, BuyMeACoffee-Africa, community",
        url: `${BASE_URL}/en/contributors`,
      },
      fr: {
        title: "Contributeurs — BuyMeACoffee-Africa",
        description: "Rencontrez les contributeurs formidables qui construisent BuyMeACoffee-Africa, une plateforme pour soutenir les talents africains.",
        keywords: "contributeurs, open source, développeurs, BuyMeACoffee-Africa, communauté",
        url: `${BASE_URL}/fr/contributors`,
      },
    },
    login: {
      en: {
        title: "Login — BuyMeACoffee-Africa",
        description: "Login to your BuyMeACoffee-Africa account to receive support from your fans and followers.",
        keywords: "login, sign in, account, BuyMeACoffee-Africa",
        url: `${BASE_URL}/en/login`,
      },
      fr: {
        title: "Connexion — BuyMeACoffee-Africa",
        description: "Connectez-vous à votre compte BuyMeACoffee-Africa pour recevoir le soutien de vos fans et followers.",
        keywords: "connexion, se connecter, compte, BuyMeACoffee-Africa",
        url: `${BASE_URL}/fr/login`,
      },
    },
    register: {
      en: {
        title: "Register — BuyMeACoffee-Africa",
        description: "Create your BuyMeACoffee-Africa account and start receiving support from your community.",
        keywords: "register, sign up, create account, BuyMeACoffee-Africa, join",
        url: `${BASE_URL}/en/register`,
      },
      fr: {
        title: "Inscription — BuyMeACoffee-Africa",
        description: "Créez votre compte BuyMeACoffee-Africa et commencez à recevoir le soutien de votre communauté.",
        keywords: "inscription, créer un compte, BuyMeACoffee-Africa, rejoindre",
        url: `${BASE_URL}/fr/register`,
      },
    },
    guide: {
      en: {
        title: "Guide — BuyMeACoffee-Africa",
        description: "Learn how to use BuyMeACoffee-Africa to support African creators and receive contributions.",
        keywords: "guide, tutorial, how to, BuyMeACoffee-Africa, help",
        url: `${BASE_URL}/en/guide`,
      },
      fr: {
        title: "Guide — BuyMeACoffee-Africa",
        description: "Apprenez à utiliser BuyMeACoffee-Africa pour soutenir les créateurs africains et recevoir des contributions.",
        keywords: "guide, tutoriel, comment, BuyMeACoffee-Africa, aide",
        url: `${BASE_URL}/fr/guide`,
      },
    },
    dashboard: {
      en: {
        title: "Dashboard — BuyMeACoffee-Africa",
        description: "Manage your BuyMeACoffee-Africa account, view your supporters, and track your earnings.",
        keywords: "dashboard, account, manage, BuyMeACoffee-Africa, supporters",
        url: `${BASE_URL}/en/dashboard`,
      },
      fr: {
        title: "Tableau de bord — BuyMeACoffee-Africa",
        description: "Gérez votre compte BuyMeACoffee-Africa, consultez vos supporters et suivez vos revenus.",
        keywords: "tableau de bord, compte, gérer, BuyMeACoffee-Africa, supporters",
        url: `${BASE_URL}/fr/dashboard`,
      },
    },
    profile: {
      en: {
        title: "Profile — BuyMeACoffee-Africa",
        description: "View and edit your BuyMeACoffee-Africa profile settings.",
        keywords: "profile, settings, account, BuyMeACoffee-Africa",
        url: `${BASE_URL}/en/profile`,
      },
      fr: {
        title: "Profil — BuyMeACoffee-Africa",
        description: "Consultez et modifiez les paramètres de votre profil BuyMeACoffee-Africa.",
        keywords: "profil, paramètres, compte, BuyMeACoffee-Africa",
        url: `${BASE_URL}/fr/profile`,
      },
    },
    privacy: {
      en: {
        title: "Privacy Policy — BuyMeACoffee-Africa",
        description: "Read our privacy policy to understand how we handle your data on BuyMeACoffee-Africa.",
        keywords: "privacy, policy, data protection, BuyMeACoffee-Africa",
        url: `${BASE_URL}/en/privacy`,
      },
      fr: {
        title: "Politique de confidentialité — BuyMeACoffee-Africa",
        description: "Lisez notre politique de confidentialité pour comprendre comment nous traitons vos données sur BuyMeACoffee-Africa.",
        keywords: "confidentialité, politique, protection des données, BuyMeACoffee-Africa",
        url: `${BASE_URL}/fr/privacy`,
      },
    },
    terms: {
      en: {
        title: "Terms of Service — BuyMeACoffee-Africa",
        description: "Read our terms of service to understand the rules and regulations for using BuyMeACoffee-Africa.",
        keywords: "terms, service, rules, BuyMeACoffee-Africa",
        url: `${BASE_URL}/en/terms`,
      },
      fr: {
        title: "Conditions d'utilisation — BuyMeACoffee-Africa",
        description: "Lisez nos conditions d'utilisation pour comprendre les règles et réglementations d'utilisation de BuyMeACoffee-Africa.",
        keywords: "conditions, service, règles, BuyMeACoffee-Africa",
        url: `${BASE_URL}/fr/terms`,
      },
    },
    license: {
      en: {
        title: "License — BuyMeACoffee-Africa",
        description: "View the open source license for BuyMeACoffee-Africa.",
        keywords: "license, open source, MIT, BuyMeACoffee-Africa",
        url: `${BASE_URL}/en/license`,
      },
      fr: {
        title: "Licence — BuyMeACoffee-Africa",
        description: "Consultez la licence open source de BuyMeACoffee-Africa.",
        keywords: "licence, open source, MIT, BuyMeACoffee-Africa",
        url: `${BASE_URL}/fr/license`,
      },
    },
  };

  const pageData = seoData[page]?.[language] || seoData[page]?.en || seoData.home.en;
  
  return {
    ...pageData,
    image: DEFAULT_IMAGE,
    locale: language === "fr" ? "fr_FR" : "en_US",
  };
};

/**
 * Generate structured data (JSON-LD) for the organization
 * @returns {Object} JSON-LD structured data
 */
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BuyMeACoffee-Africa",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-v5.webp`,
  description: "Support African creators, artists, developers, and entrepreneurs through Mobile Money services.",
  sameAs: [
    // Add social media links here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    availableLanguage: ["English", "French"],
  },
});

/**
 * Generate structured data (JSON-LD) for a web page
 * @param {Object} seoData - SEO data for the page
 * @returns {Object} JSON-LD structured data
 */
export const getWebPageStructuredData = (seoData) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: seoData.title,
  description: seoData.description,
  url: seoData.url,
  inLanguage: seoData.locale.replace("_", "-"),
  isPartOf: {
    "@type": "WebSite",
    name: "BuyMeACoffee-Africa",
    url: BASE_URL,
  },
});
