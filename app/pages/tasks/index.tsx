import GoogleTasksListList from "~/components/TodoApp/List";
import ObserverSentinel from "~/components/Common/ObserverSentinel";
import AnimatedBarsLoader from "~/components/Common/Loading/AnimatedBars";
import {
  queryClient,
  preGoogleTasksListQuery,
  googleInfiniteTasksListQuery,
} from "~/shared/clients/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

export async function clientLoader() {
  await queryClient.ensureQueryData(preGoogleTasksListQuery());
}

export default function index() {
  const MAX_RESULTS = "4";
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(googleInfiniteTasksListQuery(MAX_RESULTS));

  const fetchNextWhen = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  const fetchNextDependencies = () => [hasNextPage, isFetchingNextPage];

  return (
    <div className="w-full h-full pb-16 overflow-x-auto no-scrollbar bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        <GoogleTasksListList
          data={data}
          noDataComponent={<AnimatedBarsLoader />}
        />
        {hasNextPage && (
          <ObserverSentinel
            onIntersect={fetchNextWhen}
            onIntersectDeps={fetchNextDependencies}
            component={<AnimatedBarsLoader />}
          />
        )}
      </div>
    </div>
  );
}
