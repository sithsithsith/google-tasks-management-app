import { useEffect, useState } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

export type GoogleAuthHook = {
  login: () => void;
  logout: () => void;
  accessToken: string;
};

export type GoogleTaskRequestParams = {
  maxResults: string;
  pageToken: string;
};

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
    scope: "https://www.googleapis.com/auth/tasks",
  });
  const logout = googleLogout;

  return {
    login,
    logout,
    accessToken,
  };
}
