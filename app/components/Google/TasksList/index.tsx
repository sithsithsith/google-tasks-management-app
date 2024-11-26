import ListItem from "~/components/Google/TasksList/ListItem";
import { ReactElement } from "react";
import { InfiniteData } from "@tanstack/react-query";
import { GoogleTasksListProps, GoogleTasksResponse } from "~/ts/google";

export default function TasksList({
  data,
  noDataComponent,
}: GoogleTasksListProps<InfiniteData<GoogleTasksResponse>, ReactElement>) {
  if (!data || !("pages" in data)) {
    return (
      noDataComponent || <h1>There is no tasks currently. Create a new task</h1>
    );
  }
  return (
    <div className="flex-1 overflow-y-auto sm:p-4">
      {data.pages.map((tasklist, index) => (
        <ListItem key={`${tasklist.etag}-${index}`} tasklist={tasklist} />
      ))}
    </div>
  );
}
