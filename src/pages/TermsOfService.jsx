import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useI18n } from "../context/I18nContext";
import BackToTop from "../components/BackToTop";
import TermsSidebar from "../components/TermsSidebar";

const TermsOfService = () => {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <main id="terms-top" className="page-shell pt-32 pb-24 scroll-mt-20">
        <div className="flex w-full max-w-7xl px-20 gap-32 relative">
          {/* Sidebar Area */}
          <aside className="hidden lg:block w-60 xl:w-64 sticky top-42 self-start max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
            <TermsSidebar />
          </aside>

          {/* Main Content Area */}
          <article className="flex-1 space-y-12 text-[var(--text-secondary)] min-w-0">
            <section className="text-center">
              <img
                src={t('guide.header.imageUrl', {defaultValue: '/Download premium vector of Cup of cappuccino with tree vector about latte art, coffee cup, coffee, coffee logo, and latte art vector 503390 (1) (1).png'})}
                alt={t('guide.header.imageAlt', {defaultValue: 'Logo'})}
                className="w-40 h-40 mx-auto mb-1"
              />
              <h1 id="buymeacoffee-africa-title" className="text-xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-24">
                {t('guide.header.title', {defaultValue: 'BuyMeACoffee-Africa'})}
              </h1>
              {/* Header */}
              <div className="mb-10">
                <div className="mx-auto h-px w-full max-w-lg mb-6"></div>
                <h1 className="text-4xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-28 border-b border-[var(--surface-card-border)] pb-3 mt-4">
                  {t('terms.header.title', { defaultValue: 'Terms of Service' })}
                </h1>
                <div className="text-sm text-[var(--text-muted)] space-y-1">
                  <p>{t('terms.header.effectiveDate', { defaultValue: 'Effective Date: January 1, 2025' })}</p>
                  <p>{t('terms.header.lastUpdated', { defaultValue: 'Last Updated: January 1, 2025' })}</p>
                </div>
              </div>
            </section>

            {/* Content Sections */}
            <div className="space-y-10">
              {/* Introduction */}
              <section id="introduction">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.introduction.title', { defaultValue: 'Introduction' })}
                </h2>
                <p className="leading-relaxed">
                  {t('terms.introduction.p1', { defaultValue: 'Welcome to BuyMeACoffee-Africa...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('terms.introduction.p2', { defaultValue: 'Please read these Terms carefully...' })}
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section id="acceptance">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.acceptance.title', { defaultValue: 'Acceptance of Terms' })}
                </h2>
                <p className="leading-relaxed">
                  {t('terms.acceptance.p1', { defaultValue: 'By creating an account...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('terms.acceptance.p2', { defaultValue: 'We reserve the right to modify...' })}
                </p>
              </section>

              {/* Eligibility */}
              <section id="eligibility">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.eligibility.title', { defaultValue: 'Eligibility' })}
                </h2>
                <p className="leading-relaxed mb-3">
                  {t('terms.eligibility.intro', { defaultValue: 'To use BuyMeACoffee-Africa, you must:' })}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('terms.eligibility.item1', { defaultValue: 'Be at least 18 years old...' })}</li>
                  <li>{t('terms.eligibility.item2', { defaultValue: 'Have the legal capacity...' })}</li>
                  <li>{t('terms.eligibility.item3', { defaultValue: 'Not be prohibited...' })}</li>
                  <li>{t('terms.eligibility.item4', { defaultValue: 'Provide accurate and complete...' })}</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  {t('terms.eligibility.p1', { defaultValue: 'By using our platform...' })}
                </p>
              </section>

              {/* User Accounts */}
              <section id="accounts">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.accounts.title', { defaultValue: 'User Accounts' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.accounts.responsibility.title', { defaultValue: 'Account Responsibility' })}
                </h3>
                <p className="leading-relaxed mb-3">
                  {t('terms.accounts.responsibility.intro', { defaultValue: 'When you create an account...' })}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('terms.accounts.responsibility.item1', { defaultValue: 'Provide accurate...' })}</li>
                  <li>{t('terms.accounts.responsibility.item2', { defaultValue: 'Maintain the security...' })}</li>
                  <li>{t('terms.accounts.responsibility.item3', { defaultValue: 'Notify us immediately...' })}</li>
                  <li>{t('terms.accounts.responsibility.item4', { defaultValue: 'Be responsible for all activities...' })}</li>
                </ul>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.accounts.prohibited.title', { defaultValue: 'Prohibited Account Activities' })}
                </h3>
                <p className="leading-relaxed mb-3">
                  {t('terms.accounts.prohibited.intro', { defaultValue: 'You may not:' })}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('terms.accounts.prohibited.item1', { defaultValue: 'Create multiple accounts...' })}</li>
                  <li>{t('terms.accounts.prohibited.item2', { defaultValue: 'Share your account...' })}</li>
                  <li>{t('terms.accounts.prohibited.item3', { defaultValue: 'Impersonate another person...' })}</li>
                  <li>{t('terms.accounts.prohibited.item4', { defaultValue: 'Use automated tools...' })}</li>
                </ul>
              </section>

              {/* Donations and Payments */}
              <section id="donations">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.donations.title', { defaultValue: 'Donations and Payments' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.donations.creators.title', { defaultValue: 'For Creators' })}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.creators.item1', { defaultValue: '<strong>Payment Processing:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.creators.item2', { defaultValue: '<strong>Fees:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.creators.item3', { defaultValue: '<strong>Payouts:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.creators.item4', { defaultValue: '<strong>Taxes:</strong>...' }) }} />
                </ul>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.donations.supporters.title', { defaultValue: 'For Supporters' })}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.supporters.item1', { defaultValue: '<strong>Donations:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.supporters.item2', { defaultValue: '<strong>No Refunds:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.supporters.item3', { defaultValue: '<strong>Payment Methods:</strong>...' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('terms.donations.supporters.item4', { defaultValue: '<strong>Currency:</strong>...' }) }} />
                </ul>
              </section>

              {/* Content Guidelines */}
              <section id="content-rules">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.contentRules.title', { defaultValue: 'Content Guidelines' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 scroll-mt-24">
                  {t('terms.contentRules.ownership.title', { defaultValue: 'Content Ownership' })}
                </h3>
                <p className="leading-relaxed">
                  {t('terms.contentRules.ownership.p1', { defaultValue: 'You retain ownership...' })}
                </p>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.contentRules.prohibited.title', { defaultValue: 'Prohibited Content' })}
                </h3>
                <p className="leading-relaxed mb-3">
                  {t('terms.contentRules.prohibited.intro', { defaultValue: 'You may not post content that:' })}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('terms.contentRules.prohibited.item1', { defaultValue: 'Is illegal...' })}</li>
                  <li>{t('terms.contentRules.prohibited.item2', { defaultValue: 'Infringes on intellectual property...' })}</li>
                  <li>{t('terms.contentRules.prohibited.item3', { defaultValue: 'Contains malware...' })}</li>
                  <li>{t('terms.contentRules.prohibited.item4', { defaultValue: 'Violates privacy...' })}</li>
                  <li>{t('terms.contentRules.prohibited.item5', { defaultValue: 'Is false...' })}</li>
                  <li>{t('terms.contentRules.prohibited.item6', { defaultValue: 'Promotes violence...' })}</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual-property">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.intellectualProperty.title', { defaultValue: 'Intellectual Property' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 scroll-mt-24">
                  {t('terms.intellectualProperty.platform.title', { defaultValue: 'Platform Rights' })}
                </h3>
                <p className="leading-relaxed">
                  {t('terms.intellectualProperty.platform.p1', { defaultValue: 'BuyMeACoffee-Africa and its original content...' })}
                </p>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.intellectualProperty.userContent.title', { defaultValue: 'User Content Rights' })}
                </h3>
                <p className="leading-relaxed">
                  {t('terms.intellectualProperty.userContent.p1', { defaultValue: 'You are solely responsible...' })}
                </p>
              </section>

              {/* Termination */}
              <section id="termination">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.termination.title', { defaultValue: 'Termination' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 scroll-mt-24">
                  {t('terms.termination.byUser.title', { defaultValue: 'Termination by User' })}
                </h3>
                <p className="leading-relaxed">
                  {t('terms.termination.byUser.p1', { defaultValue: 'You may terminate your account...' })}
                </p>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">
                  {t('terms.termination.byPlatform.title', { defaultValue: 'Termination by Platform' })}
                </h3>
                <p className="leading-relaxed mb-3">
                  {t('terms.termination.byPlatform.intro', { defaultValue: 'We reserve the right...' })}
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t('terms.termination.byPlatform.item1', { defaultValue: 'You violate these Terms...' })}</li>
                  <li>{t('terms.termination.byPlatform.item2', { defaultValue: 'You engage in fraudulent...' })}</li>
                  <li>{t('terms.termination.byPlatform.item3', { defaultValue: 'Your account is inactive...' })}</li>
                  <li>{t('terms.termination.byPlatform.item4', { defaultValue: 'Required by law...' })}</li>
                </ul>
              </section>

              {/* Disclaimers */}
              <section id="disclaimers">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.disclaimers.title', { defaultValue: 'Disclaimers' })}
                </h2>
                <p className="leading-relaxed">
                  {t('terms.disclaimers.p1', { defaultValue: 'BuyMeACoffee-Africa is provided "as is"...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('terms.disclaimers.p2', { defaultValue: 'We do not guarantee that the platform...' })}
                </p>
              </section>

              {/* Limitation of Liability */}
              <section id="limitation-liability">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.limitationLiability.title', { defaultValue: 'Limitation of Liability' })}
                </h2>
                <p className="leading-relaxed">
                  {t('terms.limitationLiability.p1', { defaultValue: 'To the maximum extent permitted by law...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('terms.limitationLiability.p2', { defaultValue: 'Our total liability to you...' })}
                </p>
              </section>

              {/* Changes to Terms */}
              <section id="changes">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.changes.title', { defaultValue: 'Changes to Terms' })}
                </h2>
                <p className="leading-relaxed">
                  {t('terms.changes.p1', { defaultValue: 'We reserve the right to modify...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('terms.changes.p2', { defaultValue: 'Your continued use of BuyMeACoffee-Africa...' })}
                </p>
              </section>

              {/* Contact Section */}
              <section id="contact-us" className="mt-12 pt-8 border-t border-[var(--surface-card-border)]">
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24">
                  {t('terms.contactUs.title', { defaultValue: 'Contact Us' })}
                </h2>
                <p className="leading-relaxed mb-4">
                  {t('terms.contactUs.intro', { defaultValue: 'If you have questions...' })}
                </p>
                <div className="bg-[var(--surface-card-bg)] border border-[var(--surface-card-border)] rounded-lg p-6 space-y-2">
                  <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('terms.contactUs.email', { defaultValue: '<strong>Email:</strong> <a href="mailto:legal@buymeacoffee-africa.com">legal@buymeacoffee-africa.com</a>' }) }} />
                  <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('terms.contactUs.support', { defaultValue: '<strong>Support:</strong> <a href="mailto:support@buymeacoffee-africa.com">support@buymeacoffee-africa.com</a>' }) }} />
                  <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('terms.contactUs.github', { defaultValue: '<strong>GitHub:</strong> <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa">github.com/2MJ-DEV/BuyMeACoffee-Africa</a>' }) }} />
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      <BackToTop t={t} />

      <Footer />
    </>
  );
};

export default TermsOfService;
