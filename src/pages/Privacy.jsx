import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useI18n, FALLBACK_LANGUAGE } from "../context/I18nContext";
import { getPageSEO } from "../utils/seo";
import BackToTop from "../components/BackToTop";
import PrivacySidebar from "../components/PrivacySidebar";


const Privacy = () => {
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('privacy', activeLanguage);

  return (
    <>
      <SEO {...seoData} />
      <Navbar />
      {/* Use flex layout similar to Guide.jsx */}

      <main id="privacy-top" className="page-shell pt-32 pb-24 scroll-mt-20">
        <div className="flex w-full max-w-7xl px-20 gap-32 relative"> {/* Adjusted padding/gap */}

          {/* Sidebar Area */}
          <aside className="hidden lg:block w-60 xl:w-64 sticky top-42 self-start max-h-[calc(100vh-150px)] overflow-y-auto pr-2"> {/* Adjusted top offset */}
            <PrivacySidebar />
          </aside>

          {/* Main Content Area - Wrap in article */}
          <article className="flex-1 space-y-12 text-[var(--text-secondary)] min-w-0"> {/* Use article, add space-y */}
            <section className="text-center">
            <img
                src={t('guide.header.imageUrl', {defaultValue: '/Download premium vector of Cup of cappuccino with tree vector about latte art, coffee cup, coffee, coffee logo, and latte art vector 503390 (1) (1).png'})}
                alt={t('guide.header.imageAlt', {defaultValue: 'Logo'})}
                className="w-40 h-40 mx-auto mb-1" // Adjusted size
              />
              {/* Note: ID added here for potential linking, though usually linked via sections below */}
              <h1 id="buymeacoffee-africa-title" className="text-xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-24">
                 {t('guide.header.title', {defaultValue: 'BuyMeACoffee-Africa'})}
              </h1>
            {/* Header */}
            <div className="mb-10">
              <div className="mx-auto h-px w-full max-w-lg mb-6 "></div>
              <h1 className="text-4xl font-heading font-bold text-[var(--text-primary)] mb-4 scroll-mt-28 border-b border-[var(--surface-card-border)] pb-3 mt-4"> {/* Added scroll-mt */}
                {t('privacy.header.title', { defaultValue: 'Privacy Policy' })}
              </h1>
              <div className="text-sm text-[var(--text-muted)] space-y-1">
                <p>{t('privacy.header.effectiveDate', { defaultValue: 'Effective Date: January 1, 2025' })}</p>
                <p>{t('privacy.header.lastUpdated', { defaultValue: 'Last Updated: January 1, 2025' })}</p>
              </div>
            </div>
            </section>
            {/* Content Sections */}
            <div className="space-y-10"> {/* Removed outer div, relying on article's space-y */}
              {/* Introduction */}
              <section id="introduction"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.introduction.title', { defaultValue: 'Introduction' })}
                </h2>
                <p className="leading-relaxed">
                  {t('privacy.introduction.p1', { defaultValue: 'Welcome to BuyMeACoffee-Africa...' })}
                </p>
                <p className="leading-relaxed mt-4">
                  {t('privacy.introduction.p2', { defaultValue: 'By using BuyMeACoffee-Africa, you agree...' })}
                </p>
              </section>

              {/* Section 1 */}
              <section id="info-collected"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.infoCollected.title', { defaultValue: 'Information We Collect' })}
                </h2>

                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.infoCollected.personal.title', { defaultValue: 'Personal Information' })}
                </h3>
                {/* ... rest of section 1 content ... */}
                <ul className="list-disc pl-6 space-y-2">
                  <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.personal.item1', { defaultValue: '<strong>Account Information:</strong> Name, email address, username, and password' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.personal.item2', { defaultValue: '<strong>Profile Information:</strong> Profile picture, bio, creator description, and links to your social media or website' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.personal.item3', { defaultValue: '<strong>Payment Information:</strong> Mobile Money number, transaction details, and payment history' }) }} />
                  <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.personal.item4', { defaultValue: '<strong>Communication Data:</strong> Messages, support inquiries, and feedback you send to us' }) }} />
                </ul>


                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.infoCollected.automated.title', { defaultValue: 'Automatically Collected Information' })}
                </h3>
                 {/* ... rest of section 1.2 content ... */}
                 <p className="leading-relaxed mb-3">
                   {t('privacy.infoCollected.automated.intro', { defaultValue: 'We automatically collect certain information...' })}
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                   <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.automated.item1', { defaultValue: '<strong>Usage Data:</strong> Pages visited, time spent on pages, clicks, and navigation patterns' }) }} />
                   <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.automated.item2', { defaultValue: '<strong>Device Information:</strong> IP address, browser type, operating system, device identifiers' }) }} />
                   <li dangerouslySetInnerHTML={{ __html: t('privacy.infoCollected.automated.item3', { defaultValue: '<strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience' }) }} />
                 </ul>

                 <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24"> {/* Added scroll-mt */}
                   {t('privacy.infoCollected.thirdParty.title', { defaultValue: 'Third-Party Information' })}
                 </h3>
                 {/* ... rest of section 1.3 content ... */}
                  <p className="leading-relaxed mb-3">
                    {t('privacy.infoCollected.thirdParty.intro', { defaultValue: 'If you sign in using third-party services...' })}
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>{t('privacy.infoCollected.thirdParty.item1', { defaultValue: 'Basic profile information (name, email, profile picture)' })}</li>
                    <li>{t('privacy.infoCollected.thirdParty.item2', { defaultValue: 'Public repository information (for GitHub authentication)' })}</li>
                    <li>{t('privacy.infoCollected.thirdParty.item3', { defaultValue: 'Any other information you authorize...' })}</li>
                  </ul>
              </section>

              {/* Section 2 */}
              <section id="info-use"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.infoUse.title', { defaultValue: 'How We Use Your Information' })}
                </h2>
                {/* ... rest of section 2 content ... */}
                  <p className="leading-relaxed mb-4">
                    {t('privacy.infoUse.intro', { defaultValue: 'We use your personal information...' })}
                  </p>
                   {/* ... rest of section 2 sub-sections ... */}
                   <div className="space-y-4">
                     {/* ... (Service Delivery, Platform Improvement, etc.) ... */}
                      <div>
                        <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">{t('privacy.infoUse.serviceDelivery.title', { defaultValue: 'Service Delivery' })}</h3> {/* Add scroll-mt */}
                        {/* ... ul ... */}
                         <ul className="list-disc pl-6 space-y-1">
                           <li>{t('privacy.infoUse.serviceDelivery.item1', { defaultValue: 'Creating and managing your account' })}</li>
                           <li>{t('privacy.infoUse.serviceDelivery.item2', { defaultValue: 'Processing donations and payments' })}</li>
                           <li>{t('privacy.infoUse.serviceDelivery.item3', { defaultValue: 'Enabling communication between creators and supporters' })}</li>
                           <li>{t('privacy.infoUse.serviceDelivery.item4', { defaultValue: 'Providing customer support' })}</li>
                         </ul>
                      </div>
                      {/* Add scroll-mt-24 to other h3 elements in this section too */}
                      <div>
                        <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">{t('privacy.infoUse.improvement.title', { defaultValue: 'Platform Improvement' })}</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>{t('privacy.infoUse.improvement.item1', { defaultValue: 'Analyzing usage patterns...' })}</li>
                           <li>{t('privacy.infoUse.improvement.item2', { defaultValue: 'Developing new features...' })}</li>
                           <li>{t('privacy.infoUse.improvement.item3', { defaultValue: 'Conducting research and analytics' })}</li>
                         </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">{t('privacy.infoUse.communication.title', { defaultValue: 'Communication' })}</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>{t('privacy.infoUse.communication.item1', { defaultValue: 'Sending transactional emails...' })}</li>
                           <li>{t('privacy.infoUse.communication.item2', { defaultValue: 'Providing important service announcements' })}</li>
                           <li>{t('privacy.infoUse.communication.item3', { defaultValue: 'Responding to your inquiries...' })}</li>
                           <li>{t('privacy.infoUse.communication.item4', { defaultValue: 'Sending marketing communications (with your consent)' })}</li>
                         </ul>
                      </div>
                       <div>
                         <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-2 scroll-mt-24">{t('privacy.infoUse.security.title', { defaultValue: 'Security and Compliance' })}</h3>
                         <ul className="list-disc pl-6 space-y-1">
                           <li>{t('privacy.infoUse.security.item1', { defaultValue: 'Detecting and preventing fraud...' })}</li>
                           <li>{t('privacy.infoUse.security.item2', { defaultValue: 'Enforcing our Terms of Service' })}</li>
                           <li>{t('privacy.infoUse.security.item3', { defaultValue: 'Complying with legal obligations...' })}</li>
                         </ul>
                       </div>
                   </div>
              </section>

              {/* Section 3 */}
              <section id="info-share"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.infoShare.title', { defaultValue: 'How We Share Your Information' })}
                </h2>
                {/* ... rest of section 3 content ... */}
                  <p className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.intro', { defaultValue: '<strong>We do not sell your personal information.</strong>...' }) }} />
                  {/* ... rest of section 3 ul ... */}
                   <div className="bg-[rgba(225,169,72,0.1)] border border-[rgba(225,169,72,0.3)] rounded-lg p-4 mb-4">
                      <p className="text-sm text-[var(--color-coffee)]" dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.importantNote', { defaultValue: '<strong>Important:</strong> Your privacy is our priority...' }) }} />
                   </div>
                   <ul className="list-disc pl-6 space-y-3">
                     <li dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.item1', { defaultValue: '<strong>With Your Consent:</strong>...' }) }} />
                     <li dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.item2', { defaultValue: '<strong>Service Providers:</strong>...' }) }} />
                     <li dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.item3', { defaultValue: '<strong>Public Information:</strong>...' }) }} />
                     <li dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.item4', { defaultValue: '<strong>Legal Requirements:</strong>...' }) }} />
                     <li dangerouslySetInnerHTML={{ __html: t('privacy.infoShare.item5', { defaultValue: '<strong>Business Transfers:</strong>...' }) }} />
                   </ul>
              </section>

              {/* Section 4 */}
              <section id="data-security"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.dataSecurity.title', { defaultValue: 'Data Storage and Security' })}
                </h2>
                {/* ... rest of section 4 content ... */}
                <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 scroll-mt-24">{t('privacy.dataSecurity.securityMeasures.title', { defaultValue: 'Security Measures' })}</h3> {/* Add scroll-mt */}
                {/* ... rest of 4.1 content ... */}
                 <p className="leading-relaxed mb-3">
                   {t('privacy.dataSecurity.securityMeasures.intro', { defaultValue: 'We implement industry-standard...' })}
                 </p>
                 <ul className="list-disc pl-6 space-y-2">
                   <li>{t('privacy.dataSecurity.securityMeasures.item1', { defaultValue: 'Encryption of data in transit (HTTPS/TLS)' })}</li>
                   <li>{t('privacy.dataSecurity.securityMeasures.item2', { defaultValue: 'Encryption of sensitive data at rest' })}</li>
                   <li>{t('privacy.dataSecurity.securityMeasures.item3', { defaultValue: 'Password hashing using bcrypt' })}</li>
                   <li>{t('privacy.dataSecurity.securityMeasures.item4', { defaultValue: 'Regular security audits and updates' })}</li>
                   <li>{t('privacy.dataSecurity.securityMeasures.item5', { defaultValue: 'Access controls and authentication mechanisms' })}</li>
                   <li>{t('privacy.dataSecurity.securityMeasures.item6', { defaultValue: 'Secure token-based authentication (JWT)' })}</li>
                 </ul>

                 <h3 className="text-2xl font-heading font-medium text-[var(--text-primary)] mb-3 mt-6 scroll-mt-24">{t('privacy.dataSecurity.retention.title', { defaultValue: 'Data Retention' })}</h3> {/* Add scroll-mt */}
                 {/* ... rest of 4.2 content ... */}
                  <p className="leading-relaxed">
                    {t('privacy.dataSecurity.retention.p1', { defaultValue: 'We retain your personal information...' })}
                  </p>
              </section>

              {/* Section 5 */}
              <section id="rights-choices"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.rightsChoices.title', { defaultValue: 'Your Rights and Choices' })}
                </h2>
                {/* ... rest of section 5 content ... */}
                 <p className="leading-relaxed mb-4">
                   {t('privacy.rightsChoices.intro', { defaultValue: 'Depending on your location...' })}
                 </p>
                 {/* ... rest of section 5 grid ... */}
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {/* ... (Access, Correction, etc.) ... */}
                     <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                       <h4 className="font-medium text-[var(--text-primary)] mb-2">{t('privacy.rightsChoices.access.title', { defaultValue: 'Access & Portability' })}</h4>
                       <ul className="text-sm space-y-1">
                         <li>{t('privacy.rightsChoices.access.item1', { defaultValue: '• Request a copy of your data' })}</li>
                         <li>{t('privacy.rightsChoices.access.item2', { defaultValue: '• Receive data in a portable format' })}</li>
                       </ul>
                     </div>
                     {/* Add scroll-mt-24 to other h4 elements if needed */}
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">{t('privacy.rightsChoices.correction.title', { defaultValue: 'Correction & Deletion' })}</h4>
                        <ul className="text-sm space-y-1">
                          <li>{t('privacy.rightsChoices.correction.item1', { defaultValue: '• Update inaccurate information' })}</li>
                          <li>{t('privacy.rightsChoices.correction.item2', { defaultValue: '• Request deletion of your data' })}</li>
                        </ul>
                      </div>
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">{t('privacy.rightsChoices.consent.title', { defaultValue: 'Consent Management' })}</h4>
                        <ul className="text-sm space-y-1">
                          <li>{t('privacy.rightsChoices.consent.item1', { defaultValue: '• Withdraw consent anytime' })}</li>
                          <li>{t('privacy.rightsChoices.consent.item2', { defaultValue: '• Opt-out of marketing emails' })}</li>
                        </ul>
                      </div>
                      <div className="border border-[var(--surface-card-border)] rounded-lg p-4">
                        <h4 className="font-medium text-[var(--text-primary)] mb-2">{t('privacy.rightsChoices.restriction.title', { defaultValue: 'Restriction & Objection' })}</h4>
                        <ul className="text-sm space-y-1">
                          <li>{t('privacy.rightsChoices.restriction.item1', { defaultValue: '• Request limited processing' })}</li>
                          <li>{t('privacy.rightsChoices.restriction.item2', { defaultValue: '• Object to certain uses' })}</li>
                        </ul>
                      </div>
                  </div>
                 <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t('privacy.rightsChoices.p1', { defaultValue: 'To exercise any of these rights, please contact us at <a href="mailto:privacy@buymeacoffee-africa.com" className="font-medium text-[var(--color-coffee)] hover:text-[var(--color-espresso)]">privacy@buymeacoffee-africa.com</a>' }) }} />
              </section>

              {/* Section 6 */}
              <section id="childrens-privacy"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.childrensPrivacy.title', { defaultValue: "Children's Privacy" })}
                </h2>
                {/* ... rest of section 6 content ... */}
                <p className="leading-relaxed">
                   {t('privacy.childrensPrivacy.p1', { defaultValue: "BuyMeACoffee-Africa is not intended for children..." })}
                 </p>
              </section>

              {/* Contact Section */}
              <section id="contact-us" className="mt-12 pt-8 border-t border-[var(--surface-card-border)]"> {/* Add ID */}
                <h2 className="text-3xl font-heading font-semibold text-[var(--text-primary)] border-b border-[var(--surface-card-border)] pb-2 mb-4 scroll-mt-24"> {/* Added scroll-mt */}
                  {t('privacy.contactUs.title', { defaultValue: 'Contact Us' })}
                </h2>
                {/* ... rest of contact section content ... */}
                  <p className="leading-relaxed mb-4">
                    {t('privacy.contactUs.intro', { defaultValue: 'If you have questions, concerns, or requests...' })}
                  </p>
                  <div className="bg-[var(--surface-card-bg)] border border-[var(--surface-card-border)] rounded-lg p-6 space-y-2">
                    <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('privacy.contactUs.email', { defaultValue: '<strong>Email:</strong> <a href="mailto:privacy@buymeacoffee-africa.com" ...>privacy@buymeacoffee-africa.com</a>' }) }} />
                    <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('privacy.contactUs.support', { defaultValue: '<strong>Support:</strong> <a href="mailto:support@buymeacoffee-africa.com" ...>support@buymeacoffee-africa.com</a>' }) }} />
                    <p className="text-[var(--text-secondary)]" dangerouslySetInnerHTML={{ __html: t('privacy.contactUs.github', { defaultValue: '<strong>GitHub:</strong> <a href="https://github.com/2MJ-DEV/BuyMeACoffee-Africa" ...>github.com/2MJ-DEV/BuyMeACoffee-Africa</a>' }) }} />
                  </div>
              </section>
            </div>
          </article> {/* End Article */}
        </div> {/* End Main Container Div */}
      </main>

      <BackToTop t={t} />

      <Footer />
    </>
  );
};

export default Privacy;