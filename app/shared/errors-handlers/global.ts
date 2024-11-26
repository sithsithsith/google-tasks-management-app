import { AxiosError } from "~/ts/axios";
import { handleAxiosError, isAxiosError } from "~/shared/errors-handlers/axios";

export type ErrorHandlerOptions<E> = {
  logError?: (error: E) => void;
  showAlert?: (message: string) => void;
  retryRequest?: () => Promise<void>;
  customHandlers?: Array<(error: E) => boolean>;
};

export const globalErrorHandler = <E = unknown>(
  error: E,
  options?: ErrorHandlerOptions<E>
): void => {
  const { logError, showAlert, customHandlers } = options || {};

  if (customHandlers) {
    for (const handler of customHandlers) {
      if (handler(error)) return;
    }
  }

  logError?.(error);

  if (isAxiosError(error)) {
    handleAxiosError(error, options as ErrorHandlerOptions<AxiosError>);
    return;
  }

  if (error instanceof TypeError) {
    const message = `Type error: ${error.message}`;
    showAlert?.(message);
    return;
  }

  const message = (error as Error)?.message || "An unexpected error occurred.";
  showAlert?.(message);
};

type FetchFunction<T> = (...args: any[]) => Promise<T>;

export function UnwarpOrHandleErr<T, E = unknown>(
  fetchFn: FetchFunction<T>,
  fallbackOptions: ErrorHandlerOptions<E>
): (...args: Parameters<typeof fetchFn>) => Promise<T | unknown> {
  return async (...args: Parameters<typeof fetchFn>) => {
    try {
      return await fetchFn(...args);
    } catch (error) {
      return globalErrorHandler(error as E, fallbackOptions);
    }
  };
}
