// src/pages/Dashboard/Dashboard.jsx
import { useState } from "react";
import SEO from "../../components/SEO";
import { useI18n, FALLBACK_LANGUAGE } from "../../context/I18nContext";
import { getPageSEO } from "../../utils/seo";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./sections/Overview";
import Profile from "./sections/Profile";
import Donations from "./sections/Donations";
import Settings from "./sections/Settings";

const Dashboard = () => {
  const { language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('dashboard', activeLanguage);
  const [activeSection, setActiveSection] = useState("overview");

  const renderSection = () => {
    switch (activeSection) {
      case "overview":
        return <Overview />;
      case "profile":
        return <Profile />;
      case "donations":
        return <Donations />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <SEO {...seoData} />
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-6">
            {renderSection()}
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
