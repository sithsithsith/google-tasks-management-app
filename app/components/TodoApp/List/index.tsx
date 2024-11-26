import { ReactElement } from "react";
import { InfiniteData } from "@tanstack/react-query";
import { GoogleTasksListListProps, GoogleTasksResponse } from "~/ts/google";
import GoogleTasksListItem from "./ListItem";

export default function GoogleTasksListList({
  data,
  noDataComponent,
}: GoogleTasksListListProps<InfiniteData<GoogleTasksResponse>, ReactElement>) {
  if (!data || !("pages" in data)) {
    return noDataComponent || <h1>Sorry, No Data</h1>;
  }
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {data.pages.map((tasklist, index) => (
        <GoogleTasksListItem
          key={`${tasklist.etag}-${index}`}
          tasklist={tasklist}
        />
      ))}
    </div>
  );
}
