import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import LanguageLayout from "./LanguageLayout";
import Home from "../pages/Home";
import Contributors from "../pages/Contributors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile";
import GitHubCallback from "../components/GitHubCallback";
import NotFound from "../pages/NotFound";
import Privacy from "../pages/Privacy";
import License from "../pages/License";
import TermsOfService from "../pages/TermsOfService";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";
import Guide from "../pages/Guide";

const DefaultLanguageRedirect = () => {
  const { language } = useI18n();
  return <Navigate to={`/${language ?? FALLBACK_LANGUAGE}`} replace />;
};

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<DefaultLanguageRedirect />} />

      <Route path=":language" element={<LanguageLayout />}>
        {/* Routes publiques */}
        <Route element={<PublicRoutes />}>
          <Route index element={<Home />} />
          <Route path="contributors" element={<Contributors />} />
          <Route path="login" element={<Login />} />
          <Route path="auth/github/callback" element={<GitHubCallback />} />
          <Route path="register" element={<Register />} />
          <Route path="guide" element={<Guide />} />
        </Route>

        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="license" element={<License />} />

        {/* Routes privées */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const AppRouter = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default AppRouter;
