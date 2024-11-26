import config from "~/shared/config";
import { useEffect, useState } from "react";
import { GoogleAuthHook } from "~/ts/google";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export default function useGoogleAuth(): GoogleAuthHook {
  const [accessToken, setAccessToken] = useState<string>(
    () => localStorage.getItem("access_token") || ""
  );
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("access_token", accessToken);
    }
  }, [accessToken]);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setAccessToken(tokenResponse.access_token),
    scope: config.googleOauth2Scopes,
  });
  const logout = googleLogout;

  return {
    login,
    logout,
    accessToken,
  };
}
