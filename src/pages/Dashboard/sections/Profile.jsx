import { useI18n } from "../../../context/I18nContext";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { apiRequest } from "../../../lib/apiClient";
import { User, Mail, Github, Save, Edit2 } from "lucide-react";

const Profile = () => {
  const { t } = useI18n();
  const { user, refreshSession } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    bio: user?.bio || "",
  });
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
      await apiRequest("/api/user/profile", {
        method: "PATCH",
        body: JSON.stringify(formData),
      });
      
      await refreshSession();
      setIsEditing(false);
      setMessage({ type: "success", text: t("dashboard.profile.updateSuccess") });
    } catch (error) {
      setMessage({ type: "error", text: error.message || t("dashboard.profile.updateError") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("dashboard.profile.title")}</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">{t("dashboard.profile.description")}</p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
        >
          <Edit2 className="w-4 h-4" />
          {isEditing ? t("dashboard.profile.cancel") : t("dashboard.profile.edit")}
        </button>
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

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-start gap-6 mb-6">
          <div className="relative">
            {user?.githubAvatarUrl ? (
              <img
                src={user.githubAvatarUrl}
                alt={user.name || "User"}
                className="w-24 h-24 rounded-full border-4 border-gray-200 dark:border-gray-700"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            )}
          </div>
          <div className="flex-1">
            {!isEditing ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {user?.name || user?.githubUsername || t("profile.notSet")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{user?.bio || t("dashboard.profile.noBio")}</p>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("profile.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t("dashboard.profile.namePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {t("dashboard.profile.bio")}
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-500 dark:bg-gray-700 dark:text-white"
                    placeholder={t("dashboard.profile.bioPlaceholder")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-400 text-white rounded-lg transition-colors"
                >
                  <Save className="w-4 h-4" />
                  {loading ? t("dashboard.profile.saving") : t("dashboard.profile.save")}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <Mail className="w-5 h-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium">{t("profile.email")}</p>
              <p className="text-sm">{user?.email || t("profile.notSet")}</p>
            </div>
          </div>
          {user?.githubUsername && (
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
              <Github className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm font-medium">GitHub</p>
                <a
                  href={`https://github.com/${user.githubUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-yellow-600 hover:underline"
                >
                  @{user.githubUsername}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Profile;
