import { GoogleTasksResponse, GoogleTasksRequestParameters } from "~/ts/google";
import { googleTaskAxiosClient } from "~/shared/clients/axios";

export async function getGoogleTasksList(
  requestParams?: GoogleTasksRequestParameters
): Promise<GoogleTasksResponse> {
  const params = new URLSearchParams(requestParams);
  const axiosResponse = await googleTaskAxiosClient.get(
    "lists/@default/tasks",
    { params }
  );
  return axiosResponse.data;
}
