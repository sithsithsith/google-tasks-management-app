import { HTTPStatusCodes } from "~/ts/core/api";

export type AxiosError = {
  code: string;
  message: string;
  status: HTTPStatusCodes;
};
