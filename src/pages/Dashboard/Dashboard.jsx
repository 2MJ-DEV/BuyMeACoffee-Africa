// src/pages/Dashboard/Dashboard.jsx
import SEO from "../../components/SEO";
import { useI18n, FALLBACK_LANGUAGE } from "../../context/I18nContext";
import { getPageSEO } from "../../utils/seo";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./sections/Overview";

const Dashboard = () => {
  const { language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('dashboard', activeLanguage);

  return (
    <>
      <SEO {...seoData} />
      <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <Overview />
        </main>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
