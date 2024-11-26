export type GoogleTasksRequestParameters = {
  maxResults?: string;
  pageToken?: string;
};

export type GoogleTasksItemResponse = {
  id: string;
  title: string;
  notes: string;
  due: string;
  status: string;
};

export type GoogleTasksResponse = {
  kind: string;
  etag: string;
  items: GoogleTasksItemResponse[];
  nextPageToken?: string;
};
