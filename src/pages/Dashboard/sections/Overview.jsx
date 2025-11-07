import { useI18n } from "../../../context/I18nContext";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import { apiRequest } from "../../../lib/apiClient";
import StatsCard from "../components/StatsCard";
import { DollarSign, Users, TrendingUp, Coffee } from "lucide-react";

const Overview = () => {
  const { t } = useI18n();
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalDonations: 0,
    totalAmount: 0,
    totalSupporters: 0,
    monthlyGrowth: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await apiRequest("/api/dashboard/stats");
        setStats(data);
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchStats();
  }, []);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {t("dashboard.overview.welcome")}, {user?.name || user?.githubUsername || "Creator"}!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{t("dashboard.overview.description")}</p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title={t("dashboard.overview.stats.totalDonations")}
            value={stats.totalDonations}
            icon={<Coffee className="w-6 h-6" />}
            color="yellow"
          />
          <StatsCard
            title={t("dashboard.overview.stats.totalAmount")}
            value={`$${stats.totalAmount.toFixed(2)}`}
            icon={<DollarSign className="w-6 h-6" />}
            color="green"
          />
          <StatsCard
            title={t("dashboard.overview.stats.supporters")}
            value={stats.totalSupporters}
            icon={<Users className="w-6 h-6" />}
            color="blue"
          />
          <StatsCard
            title={t("dashboard.overview.stats.growth")}
            value={`${stats.monthlyGrowth > 0 ? '+' : ''}${stats.monthlyGrowth}%`}
            icon={<TrendingUp className="w-6 h-6" />}
            color="purple"
          />
        </div>
      )}

      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t("dashboard.overview.recentActivity")}
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          {t("dashboard.overview.noActivity")}
        </p>
      </div>
    </section>
  );
};

export default Overview;
