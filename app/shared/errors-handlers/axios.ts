import axios from "axios";
import { AxiosError } from "~/ts/axios";

export const isAxiosError = (error: unknown) => axios.isAxiosError(error);

export const handleAxiosError = (
  error: unknown,
  options?: {
    logError?: (error: AxiosError) => void;
    showAlert?: (message: string) => void;
    retryRequest?: () => Promise<void>;
  }
): void => {
  const axiosError = parseAxiosError(error);

  if (options?.retryRequest) {
    options.retryRequest();
  }

  // Log error if a logging function is provided
  if (options?.logError) {
    options.logError(axiosError);
  }

  // Show alert to the user
  if (options?.showAlert) {
    options.showAlert(axiosError.message);
  }
};

export const parseAxiosError = (error: unknown): AxiosError => {
  return error as AxiosError;
};
