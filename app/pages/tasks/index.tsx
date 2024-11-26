import TasksList from "~/components/Google/TasksList";
import ObserverSentinel from "~/components/Common/ObserverSentinel";
import AnimatedBarsLoader from "~/components/Common/Loading/AnimatedBars";
import Footer from "~/components/Google/Footer";
import {
  queryClient,
  preGoogleTasksListQuery,
  googleInfiniteTasksListQuery,
} from "~/shared/clients/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useGoogleTasksModal } from "~/shared/hooks/useGoogleTasksModal";

export async function clientLoader() {
  await queryClient.ensureQueryData(preGoogleTasksListQuery());
}

export default function index() {
  /** Table */
  const MAX_RESULTS = "4";
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(googleInfiniteTasksListQuery(MAX_RESULTS));

  const fetchNextWhen = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };
  const fetchNextDependencies = () => [hasNextPage, isFetchingNextPage];

  /** Create */
  const { openGoogleTasksModal } = useGoogleTasksModal();

  const addNewTask = () => {
    openGoogleTasksModal(<>Hello add new task</>);
  };

  return (
    <>
      <div className="w-full h-full pb-16 overflow-x-auto no-scrollbar bg-gray-100">
        <div className="flex-1 overflow-y-auto p-4">
          <TasksList data={data} noDataComponent={<AnimatedBarsLoader />} />
          {hasNextPage && (
            <ObserverSentinel
              onIntersect={fetchNextWhen}
              onIntersectDeps={fetchNextDependencies}
              component={<AnimatedBarsLoader />}
            />
          )}
        </div>
      </div>
      <Footer title="Add Task" whenClick={addNewTask} />
    </>
  );
}
