import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import SEO from "../components/SEO";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";
import { apiPost } from "../lib/apiClient";
import { useAuth } from "../context/AuthContext";
import { getPageSEO } from "../utils/seo";

const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
const redirectUri = import.meta.env.VITE_GITHUB_REDIRECT_URI;

const Register = () => {
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const seoData = getPageSEO('register', activeLanguage);
  const navigate = useNavigate();
  const { login: persistAuth, isAuthenticated } = useAuth();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const withLanguagePrefix = useMemo(
    () => (targetPath) => {
      const sanitizedPath = targetPath.startsWith("/") ? targetPath.slice(1) : targetPath;
      if (!sanitizedPath) {
        return `/${activeLanguage}`;
      }
      return `/${activeLanguage}/${sanitizedPath}`;
    },
    [activeLanguage],
  );

  const handleGitHubLogin = () => {
    if (!clientId || !redirectUri) {
      setError(t("auth.errors.providerNotConfigured", { provider: "GitHub" }));
      return;
    }

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=user&redirect_uri=${redirectUri}`;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setError(null);

      if (!formState.name || !formState.email || !formState.password) {
        setError(t("register.form.errors.missingFields"));
        return;
      }

      setIsSubmitting(true);

      try {
        const payload = await apiPost("/api/auth/register", {
          name: formState.name,
          email: formState.email,
          password: formState.password,
        });

        persistAuth(payload);
        navigate(withLanguagePrefix("/dashboard"), { replace: true });
      } catch (requestError) {
        setError(requestError.message ?? t("register.form.errors.generic"));
      } finally {
        setIsSubmitting(false);
      }
    },
    [formState.email, formState.name, formState.password, navigate, persistAuth, t, withLanguagePrefix],
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate(withLanguagePrefix("/dashboard"), { replace: true });
    }
  }, [isAuthenticated, navigate, withLanguagePrefix]);

  return (
    <>
      <SEO {...seoData} />
      <div className="page-shell relative min-h-screen bg-gradient-to-b from-[rgba(245,237,230,0.94)] via-[rgba(200,159,133,0.25)] to-[rgba(245,237,230,0.94)] px-6 py-20">
        <div className="absolute inset-x-0 top-0 -z-10 h-56 bg-gradient-to-b from-[rgba(245,237,230,0.95)] via-transparent to-transparent" />
        <div className="mx-auto flex w-full max-w-md flex-col gap-8 text-center">
          <Link
            to={withLanguagePrefix("/")}
            className="self-start text-sm font-medium text-[var(--color-coffee)] transition hover:text-[var(--color-espresso)]"
          >
            {t("common.actions.backToHome")}
          </Link>

        <div className="surface-card rounded-3xl p-10">
          <h1 className="font-heading text-3xl font-semibold text-[var(--text-primary)]">{t("register.title")}</h1>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{t("register.subtitle")}</p>

          <div className="mt-8 flex flex-col gap-4">
            <button
              onClick={handleGitHubLogin}
              type="button"
              className="btn-primary flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              <FaGithubAlt className="icon-accent text-lg" />
              {t("register.github")}
            </button>

            <button
              type="button"
              disabled
              className="btn-secondary flex cursor-not-allowed items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"
            >
              <FaGoogle className="icon-accent text-base" />
              {t("register.google")}
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-[rgba(107,62,38,0.55)]">
            <span className="flex-1 border-t border-[rgba(200,159,133,0.4)]" />
            {t("register.form.divider")}
            <span className="flex-1 border-t border-[rgba(200,159,133,0.4)]" />
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 text-left">
            <label className="text-sm font-medium text-[var(--text-primary)]">
              {t("register.form.name")}
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={formState.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-[rgba(200,159,133,0.35)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--color-coffee)] focus:ring-2 focus:ring-[rgba(200,159,133,0.45)]"
                placeholder={t("register.form.namePlaceholder")}
              />
            </label>

            <label className="text-sm font-medium text-[var(--text-primary)]">
              {t("register.form.email")}
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formState.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-[rgba(200,159,133,0.35)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--color-coffee)] focus:ring-2 focus:ring-[rgba(200,159,133,0.45)]"
                placeholder="you@example.com"
              />
            </label>

            <label className="text-sm font-medium text-[var(--text-primary)]">
              {t("register.form.password")}
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                value={formState.password}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-[rgba(200,159,133,0.35)] bg-white px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--color-coffee)] focus:ring-2 focus:ring-[rgba(200,159,133,0.45)]"
                placeholder="••••••••"
              />
            </label>

            {error ? (
              <div className="rounded-2xl bg-[rgba(217,45,32,0.08)] px-4 py-3 text-sm text-[rgba(147,20,12,0.9)]">
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center justify-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-75"
            >
              {isSubmitting ? t("register.form.submitting") : t("register.form.submit")}
            </button>
          </form>

          <div className="mt-8 rounded-2xl bg-[rgba(200,159,133,0.12)] px-4 py-3 text-sm text-[var(--text-muted)]">
            {t("register.cta.question")} {" "}
            <Link
              to={withLanguagePrefix("/login")}
              className="font-semibold text-[var(--color-coffee)] transition hover:text-[var(--color-espresso)]"
            >
              {t("register.cta.action")}
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Register;
