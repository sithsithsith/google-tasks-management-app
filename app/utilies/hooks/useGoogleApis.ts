import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useEffect, useState } from "react";

export type GoogleApis = {
  login: () => void;
  logout: () => void;
  accessToken: string;
};

export default function useGoogleApis(): GoogleApis {
  const [accessToken, setAccessToken] = useState<string>(() => {
    if (typeof window !== undefined) {
      const localToken = localStorage.getItem("access_token") || "";
      return localToken;
    }
    return "";
  });
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setAccessToken(tokenResponse.access_token),
    scope: "https://www.googleapis.com/auth/tasks",
  });
  const logout = googleLogout;

  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("access_token", accessToken);
    }
  }, [accessToken]);

  return {
    login,
    logout,
    accessToken,
  };
}
