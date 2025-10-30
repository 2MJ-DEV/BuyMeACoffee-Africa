import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FALLBACK_LANGUAGE, useI18n } from "../context/I18nContext";
import { useAuth } from "../context/AuthContext";

const GitHubCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t, language } = useI18n();
  const activeLanguage = language ?? FALLBACK_LANGUAGE;
  const { login: setAuthState } = useAuth();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      console.log("Code GitHub reçu :", code);
      // Here you could send the code to your backend to retrieve the token.
      // For now, simulate a logged-in user until the OAuth exchange is implemented.
      setAuthState({
        user: {
          id: null,
          name: "GitHub user",
          email: null,
          role: "user",
          provider: "github",
          providerAccountId: code,
        },
        token: null,
      });
      navigate(`/${activeLanguage}/dashboard`); // redirects to dashboard
    }
  }, [activeLanguage, navigate, searchParams, setAuthState]);

  return <div className="flex justify-center items-center h-screen">{t("auth.githubCallback")}</div>;
};

export default GitHubCallback;
