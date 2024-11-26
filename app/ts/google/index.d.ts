export type GoogleTasksRequestParameters = {
  maxResults?: string;
  pageToken?: string;
};

export type GoogleTaskStatus = "needsAction" | "completed";

export type GoogleTasksItemResponse = {
  id: string;
  title: string;
  notes: string;
  due: string;
  status: GoogleTaskStatus;
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

export type GoogleFooterProps = {
  title: string;
  textColor?: "text-blue-600" | "text-red-600";
  whenClick?: () => void;
};

export type GoogleTasksListProps<W, C> = {
  data: W | undefined;
  noDataComponent?: C;
};

export type GoogleTasksListItemProps = {
  tasklist: GoogleTasksResponse;
};

export type GoogleTaskItemCardProps = {
  task: GoogleTasksItemResponse;
};

export type GoogleTaskItemActionProps = {
  status: GoogleTaskStatus;
};

export type GoogleTaskItemInfoProps = {
  status: GoogleTaskStatus;
  title: string;
  notes: string;
};

export type GoogleTasksModalContextType = {
  openGoogleTasksModal: (content: ReactNode) => void;
  closeGoogleTasksModal: () => void;
};
