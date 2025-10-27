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

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<DefaultLanguageRedirect />} />

      <Route path=":language" element={<LanguageLayout />}>
        {/* Routes publiques */}
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/github/callback" element={<GitHubCallback />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route path="privacy" element={<Privacy />} />

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
