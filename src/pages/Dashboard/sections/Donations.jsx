import { useI18n } from "../../../context/I18nContext";
import { useEffect, useState } from "react";
import { apiRequest } from "../../../lib/apiClient";
import { DollarSign, Calendar, User } from "lucide-react";

const Donations = () => {
  const { t } = useI18n();
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await apiRequest("/api/donations");
        setDonations(data);
      } catch (err) {
        console.error("Failed to fetch donations:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    void fetchDonations();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t("dashboard.donations.title")}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{t("dashboard.donations.description")}</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        {loading ? (
          <div className="p-6 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse flex gap-4">
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="p-6 text-center">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : donations.length === 0 ? (
          <div className="p-12 text-center">
            <DollarSign className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              {t("dashboard.donations.noDonations")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{t("dashboard.donations.noDonationsDesc")}</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {donations.map((donation) => (
              <div key={donation.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-full">
                    <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                          ${donation.amount.toFixed(2)}
                        </p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                          <User className="w-4 h-4" />
                          <span>{donation.supporter?.name || t("dashboard.donations.anonymous")}</span>
                        </div>
                        {donation.message && (
                          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{donation.message}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(donation.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Donations;
