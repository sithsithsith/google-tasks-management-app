import { default as AppConfig } from "~/shared/config";
import axios, { AxiosInstance } from "axios";

export function createGoogleTasksClient(): AxiosInstance {
  let axiosClient = axios.create({
    baseURL: AppConfig.googleTaskServiceEndpoint,
    headers: {
      Accept: "application/json",
    },
  });
  axiosClient.interceptors.request.use(
    (config) => {
      if (config.method === "post") {
        config.headers["Content-Type"] = "application/json";
      }
      const accessToken = localStorage.getItem("access_token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosClient;
}

export const googleTaskAxiosClient = createGoogleTasksClient();
