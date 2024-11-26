import TasksListList from "~/components/TodoApp/List";
import ObserverSentinel from "~/components/Common/ObserverSentinel";
import AnimatedBarsLoader from "~/components/Common/Loading/AnimatedBars";
import { UnwarpOrHandleErr } from "~/shared/errors-handlers/global";
import {
  queryClient,
  preGoogleTasksListQuery,
  googleInfiniteTasksListQuery,
} from "~/shared/clients/tanstack";
import { useInfiniteQuery } from "@tanstack/react-query";

export async function clientLoader() {
  const ensureQueryData = async () =>
    queryClient.ensureQueryData(preGoogleTasksListQuery());
  await UnwarpOrHandleErr(ensureQueryData, {
    retryRequest: async () => localStorage.removeItem("access_token"),
  })();
}

export default function index() {
  const MAX_RESULTS = "2";
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(googleInfiniteTasksListQuery(MAX_RESULTS));

  const onIntersect = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  const onIntersectDeps = () => [hasNextPage, isFetchingNextPage];

  return (
    <div className="w-full h-full pb-16 overflow-x-auto no-scrollbar bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        <TasksListList data={data} noDataComponent={<AnimatedBarsLoader />} />
        {hasNextPage && (
          <ObserverSentinel
            onIntersect={onIntersect}
            onIntersectDeps={onIntersectDeps}
            component={<AnimatedBarsLoader />}
          />
        )}
      </div>
    </div>
  );
}
