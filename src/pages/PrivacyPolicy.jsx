import { Link } from "react-router-dom";
import DecorativeBar from "../components/DecorativeBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useI18n } from "../context/I18nContext";

const PrivacyPolicy = () => {
  const { t } = useI18n();

  return (
    <>
      <Navbar />

      <div>
        <main className="relative z-0 flex min-h-screen flex-col px-6 py-10">
          <section className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center gap-4 mb-10">
              <h1 className="text-black/75 text-4xl font-bold">
                {t("privacy.title")}
              </h1>
              <p className="text-black/60 text-sm">
                {t("privacy.effectiveDate")}
              </p>
            </div>

            {/* Content */}
            <div className="text-black/70 text-sm leading-relaxed space-y-6 text-justify">
              {/* Introduction */}
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  {t("privacy.introduction.title")}
                </h2>
                <p>{t("privacy.introduction.text")}</p>
                <p>{t("privacy.introduction.termsAgreement")}</p>
              </section>

              {/* Definitions */}
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  {t("privacy.definitions.title")}
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>{t("privacy.definitions.serviceTerm")}</strong>{" "}
                    {t("privacy.definitions.serviceDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.personalDataTerm")}</strong>{" "}
                    {t("privacy.definitions.personalDataDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.usageDataTerm")}</strong>{" "}
                    {t("privacy.definitions.usageDataDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.cookiesTerm")}</strong>{" "}
                    {t("privacy.definitions.cookiesDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.dataControllerTerm")}</strong>{" "}
                    {t("privacy.definitions.dataControllerDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.dataProcessorTerm")}</strong>{" "}
                    {t("privacy.definitions.dataProcessorDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.definitions.userTerm")}</strong>{" "}
                    {t("privacy.definitions.userDesc")}
                  </li>
                </ul>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  {t("privacy.infoCollection.title")}
                </h2>

                <p>{t("privacy.infoCollection.description")}</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.types.title")}
                </h3>
                <p>{t("privacy.infoCollection.types.description")}</p>

                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>{t("privacy.infoCollection.types.personalData")}</strong>{" "}
                    {t("privacy.infoCollection.types.personalDataDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.types.usageData")}</strong>{" "}
                    {t("privacy.infoCollection.types.usageDataDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.types.cookies")}</strong>{" "}
                    {t("privacy.infoCollection.types.cookiesDesc")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.types.oauth")}</strong>{" "}
                    {t("privacy.infoCollection.types.oauthDesc")}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.how.title")}
                </h3>
                <p>{t("privacy.infoCollection.how.description")}</p>
                <p>{t("privacy.infoCollection.how.aggregatedData")}</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.purpose.title")}
                </h3>
                <p>{t("privacy.infoCollection.purpose.description")}</p>

                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>{t("privacy.infoCollection.purpose.items.accountManagement")}</li>
                  <li>{t("privacy.infoCollection.purpose.items.personalization")}</li>
                  <li>{t("privacy.infoCollection.purpose.items.paymentProcessing")}</li>
                  <li>{t("privacy.infoCollection.purpose.items.performanceMonitoring")}</li>
                  <li>{t("privacy.infoCollection.purpose.items.communications")}</li>
                  <li>{t("privacy.infoCollection.purpose.items.legalCompliance")}</li>
                </ul>

                <p>{t("privacy.infoCollection.purpose.conclusion")}</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.legalBasis.title")}
                </h3>
                <p>{t("privacy.infoCollection.legalBasis.description")}</p>

                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>
                    <strong>{t("privacy.infoCollection.legalBasis.items.consent")}</strong>{" "}
                    {t("privacy.infoCollection.legalBasis.items.consent.description")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.legalBasis.items.contractualNecessity")}</strong>{" "}
                    {t("privacy.infoCollection.legalBasis.items.contractualNecessity.description")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.legalBasis.items.legitimateInterest")}</strong>{" "}
                    {t("privacy.infoCollection.legalBasis.items.legitimateInterest.description")}
                  </li>
                  <li>
                    <strong>{t("privacy.infoCollection.legalBasis.items.legalObligation")}</strong>{" "}
                    {t("privacy.infoCollection.legalBasis.items.legalObligation.description")}
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.dataRetention.title")}
                </h3>
                <p>{t("privacy.infoCollection.dataRetention.description")}</p>

                <h3 className="text-lg font-semibold mt-4 mb-1">
                  {t("privacy.infoCollection.controlAndChoice.title")}
                </h3>
                <p>{t("privacy.infoCollection.controlAndChoice.description")}</p>

                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>{t("privacy.infoCollection.controlAndChoice.items.review")}</li>
                  <li>{t("privacy.infoCollection.controlAndChoice.items.withdraw")}</li>
                  <li>{t("privacy.infoCollection.controlAndChoice.items.requestDeletion")}</li>
                  <li>{t("privacy.infoCollection.controlAndChoice.items.disableCookies")}</li>
                </ul>

                <p>{t("privacy.infoCollection.controlAndChoice.conclusion")}</p>
              </section>

              {/* Changes */}
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  {t("privacy.changes.title")}
                </h2>
                <p>{t("privacy.changes.description")}</p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  {t("privacy.contact.title")}
                </h2>
                <p>
                  {t("privacy.contact.description")}{" "}
                  <a
                    href="mailto:support@buymeacoffee.africa"
                    className="text-blue-500 underline"
                  >
                    support@buymeacoffee.africa
                  </a>
                  .
                </p>
              </section>
            </div>

            {/* Back Button */}
            <div className="flex justify-center mt-10">
              <Link
                to="/"
                className="inline-flex items-center justify-center cursor-pointer whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 select-none py-2 rounded-md gap-1.5 px-3 border border-zinc-950/5 bg-yellow-500 text-white hover:bg-yellow-600 transition-all duration-300 ease-in-out active:scale-[0.93]"
              >
                {t("privacy.backToHome")}
              </Link>
            </div>
          </section>

          <DecorativeBar />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
