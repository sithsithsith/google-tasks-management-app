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

export type GoogleOAuth2Params = {
  client_id: string;
  redirect_uri: string;
  scope: string;
  include_granted_scopes: string;
  response_type: string;
};

export type GoogleAuthHook = {
  login: () => void;
  logout: () => void;
  accessToken: string;
};

export type GoogleTasksListListProps<W, C> = {
  data: W | undefined;
  noDataComponent?: C;
};

export type GoogleTasksListItemProps = {
  tasklist: GoogleTasksResponse;
};
