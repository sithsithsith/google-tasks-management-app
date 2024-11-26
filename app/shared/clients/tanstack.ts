import { GoogleTasksResponse } from "~/ts/google";
import { getGoogleTasksList } from "~/shared/api/google-tasks";
import { QueryClient, QueryFunctionContext } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const preGoogleTasksListQuery = () => ({
  queryKey: ["google-tasks"],
  queryFn: async () => getGoogleTasksList(),
});

export const googleInfiniteTasksListQuery = (maxResults: string = "4") => ({
  queryKey: ["google-tasks"],
  queryFn: async ({ pageParam }: QueryFunctionContext) => {
    const requestParams = {
      maxResults,
      ...pageParam,
    };
    return await getGoogleTasksList(requestParams);
  },
  getNextPageParam: (lastPage: GoogleTasksResponse) => {
    if ("nextPageToken" in lastPage) {
      return {
        pageToken: lastPage.nextPageToken,
      };
    }
  },
});
