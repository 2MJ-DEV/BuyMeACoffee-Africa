import { useI18n } from "../../../context/I18nContext";
import { useState } from "react";
import { apiRequest } from "../../../lib/apiClient";
import { Smartphone, CreditCard, Save } from "lucide-react";

const Settings = () => {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    mobileMoneyNumber: "",
    mobileMoneyProvider: "airtel",
  });
  const [publicProfile, setPublicProfile] = useState(true);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await apiRequest("/api/user/payment", {
        method: "PATCH",
        body: JSON.stringify(formData),
      });
      
      setMessage({ type: "success", text: t("dashboard.settings.updateSuccess") });
    } catch (error) {
      setMessage({ type: "error", text: error.message || t("dashboard.settings.updateError") });
    } finally {
      setLoading(false);
    }
  };

  const handlePublicProfileToggle = async () => {
    const newValue = !publicProfile;
    setPublicProfile(newValue);
    
    try {
      await apiRequest("/api/user/profile", {
        method: "PATCH",
        body: JSON.stringify({ publicProfile: newValue }),
      });
    } catch (error) {
      // Revert on error
      setPublicProfile(!newValue);
      console.error("Failed to update public profile setting:", error);
    }
  };

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("dashboard.settings.title")}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{t("dashboard.settings.description")}</p>
      </div>

      {message.text && (
        <div
          className={`mb-6 p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400"
              : "bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <div className="space-y-6">
        {/* Payment Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="w-6 h-6 text-yellow-600" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("dashboard.settings.paymentMethod")}
            </h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("dashboard.settings.mobileMoneyProvider")}
              </label>
              <select
                name="mobileMoneyProvider"
                value={formData.mobileMoneyProvider}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
              >
                <option value="airtel">Airtel Money</option>
                <option value="orange">Orange Money</option>
                <option value="mpesa">M-Pesa</option>
                <option value="mtn">MTN Mobile Money</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {t("dashboard.settings.mobileMoneyNumber")}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  name="mobileMoneyNumber"
                  value={formData.mobileMoneyNumber}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                  placeholder="+243 XXX XXX XXX"
                />
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {t("dashboard.settings.mobileMoneyHelp")}
              </p>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
            >
              <Save className="w-4 h-4" />
              {loading ? t("dashboard.settings.saving") : t("dashboard.settings.save")}
            </button>
          </form>
        </div>

        {/* Account Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("dashboard.settings.accountSettings")}
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{t("dashboard.settings.publicProfile")}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t("dashboard.settings.publicProfileDesc")}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  className="sr-only peer" 
                  checked={publicProfile}
                  onChange={handlePublicProfileToggle}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
