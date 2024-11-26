import { InfiniteData } from "@tanstack/react-query";
import { ReactElement } from "react";
import { GoogleTasksResponse } from "~/ts/google";

export type TasksListListProps = {
  data: InfiniteData<GoogleTasksResponse> | undefined;
  noDataComponent?: ReactElement;
};

export default function TasksListList({
  data,
  noDataComponent,
}: TasksListListProps) {
  if (!data || !("pages" in data)) {
    return noDataComponent || <h1>Sorry, No Data</h1>;
  }
  return data.pages.map((tasklist) => {
    return tasklist.items.map((task, index) => (
      <div
        key={index}
        className="p-4 mb-4 bg-white rounded-lg shadow flex justify-between items-center"
      >
        <div>
          <h2 className="text-lg font-semibold">{task.title}</h2>
          <p className="text-sm text-gray-500">{task.notes}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-bold rounded ${
            task.status === "Complete"
              ? "bg-green-100 text-green-600"
              : task.status === "Processing"
              ? "bg-blue-100 text-blue-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {task.status}
        </span>
      </div>
    ));
  });
}
