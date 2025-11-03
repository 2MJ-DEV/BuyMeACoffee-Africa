// src/components/TermsSidebar.jsx
import React from 'react';
import { useI18n } from '../context/I18nContext';

// Define the sections for the Terms of Service
const sections = [
  { id: 'introduction', titleKey: 'terms.sidebar.introduction', default: 'Introduction' },
  { id: 'acceptance', titleKey: 'terms.sidebar.acceptance', default: 'Acceptance of Terms' },
  { id: 'eligibility', titleKey: 'terms.sidebar.eligibility', default: 'Eligibility' },
  { id: 'accounts', titleKey: 'terms.sidebar.accounts', default: 'User Accounts' },
  { id: 'donations', titleKey: 'terms.sidebar.donations', default: 'Donations and Payments' },
  { id: 'content-rules', titleKey: 'terms.sidebar.contentRules', default: 'Content Guidelines' },
  { id: 'intellectual-property', titleKey: 'terms.sidebar.intellectualProperty', default: 'Intellectual Property' },
  { id: 'termination', titleKey: 'terms.sidebar.termination', default: 'Termination' },
  { id: 'disclaimers', titleKey: 'terms.sidebar.disclaimers', default: 'Disclaimers' },
  { id: 'limitation-liability', titleKey: 'terms.sidebar.limitationLiability', default: 'Limitation of Liability' },
  { id: 'changes', titleKey: 'terms.sidebar.changes', default: 'Changes to Terms' },
  { id: 'contact-us', titleKey: 'terms.sidebar.contactUs', default: 'Contact Us' },
];

const TermsSidebar = () => {
  const { t } = useI18n();

  // Smooth scroll handler
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  return (
    <nav className="space-y-4 border-r border-[var(--surface-card-border)] pr-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-latte)] mb-3">
        {t('terms.sidebar.onThisPage', { defaultValue: 'On this page' })}
      </h3>
      <ul className="space-y-2 border-l border-[var(--surface-card-border)] pl-4 text-sm">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleLinkClick(e, section.id)}
              className="block text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:font-medium transition-colors duration-150"
            >
              {t(section.titleKey, { defaultValue: section.default })}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TermsSidebar;
