import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

export type GoogleApis = {
  login: () => void;
  logout: () => void;
  accessToken: string;
};

export default function useGoogleApis(): GoogleApis {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setAccessToken(tokenResponse.access_token),
    scope: "https://www.googleapis.com/auth/tasks",
  });
  const logout = googleLogout;

  const [axiosClient, setAxiosClient] = useState<AxiosInstance>(axios.create());

  const [accessToken, setAccessToken] = useState<string>(
    () => localStorage.getItem("access_token") || ""
  );

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
