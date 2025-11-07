import { useI18n } from "../../../context/I18nContext";
import { useAuth } from "../../../context/AuthContext";
import { LogOut, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FALLBACK_LANGUAGE } from "../../../context/I18nContext";

const Navbar = ({ setIsMobileMenuOpen }) => {
  const { t, language } = useI18n();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;

  const handleLogout = () => {
    logout();
    navigate(`/${activeLanguage}/login`);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">{t("dashboard.title")}</h1>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="flex items-center gap-3">
              {user?.githubAvatarUrl && (
                <img
                  src={user.githubAvatarUrl}
                  alt={user.name || "User"}
                  className="w-8 h-8 rounded-full border-2 border-gray-200 dark:border-gray-600"
                />
              )}
              <div className="hidden sm:block text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name || user?.githubUsername || t("profile.notSet")}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email || ""}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
