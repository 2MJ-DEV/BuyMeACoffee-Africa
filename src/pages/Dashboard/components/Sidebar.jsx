import { useI18n } from "../../../context/I18nContext";
import { Home, User, DollarSign, Settings, Coffee } from "lucide-react";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const { t } = useI18n();

  const menuItems = [
    { id: "overview", label: t("dashboard.links.overview"), icon: Home },
    { id: "profile", label: t("dashboard.links.profile"), icon: User },
    { id: "donations", label: t("dashboard.links.donations"), icon: DollarSign },
    { id: "settings", label: t("dashboard.links.settings"), icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Coffee className="w-6 h-6 text-yellow-600" />
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t("dashboard.menu")}</h2>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 py-2 px-4 rounded-lg transition-colors ${
                    isActive
                      ? "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
