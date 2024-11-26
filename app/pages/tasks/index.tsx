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
import ListHeader from "~/components/Google/TasksList/ListHeader";
import config from "~/shared/config";
import { TaskItemAction } from "~/components/Google/TasksList/ListItem/TaskItemCard";
import useCalender from "~/shared/hooks/useCalender";

export async function clientLoader() {
  await queryClient.ensureQueryData(preGoogleTasksListQuery());
}

export type TaskFromProps = {
  label: string;
};

export function AddTaskForm({ label }: TaskFromProps) {
  const { getTodayDateAndTime } = useCalender();

  const { date, time } = getTodayDateAndTime();

  return (
    <div className="h-full relative">
      <ul className="w-full p-5 max-h-14 flex justify-start items-center">
        <li className="h-full w-2/5 flex items-center">
          <button className="text-sm sm:text-base text-blue-600">Cancel</button>
        </li>
        <li className="h-full flex items-center">
          <p className="text-sm sm:text-base font-semibold text-center">
            {label}
          </p>
        </li>
        <li></li>
      </ul>
      <div className="w-full h-5/6 py-5 bg-gray-100 flex flex-col items-center gap-5">
        <div className="w-11/12 sm:w-4/5">
          <input
            className="outline-none border-none rounded-t-lg w-full px-4 py-2 text-base placeholder:text-base"
            type="text"
            placeholder="Title"
          />
          <div className="w-full flex justify-start">
            <div className="w-4 h-0.5 bg-white"></div>
          </div>
          <textarea
            className="outline-none border-none rounded-b-lg w-full px-4 py-2 text-base placeholder:text-base"
            placeholder="Text"
            style={{
              resize: "none",
            }}
            rows={4}
          />
        </div>
        <div className="bg-white w-11/12 sm:w-4/5  py-2 px-4 flex flex-col items-center justify-center rounded-lg">
          <div className="h-14 w-full flex items-center justify-between border-b-[1px]">
            <p className="text-base font-normal">Starts</p>
            <div className="flex gap-3">
              <div
                className={`min-w-24 min-h-9 px-3 flex items-center justify-center py-1 text-sm font-bold rounded-md bg-blue-200`}
              >
                {date}
              </div>
              <div
                className={`min-w-24 min-h-9 px-3 flex items-center justify-center py-1 text-sm font-bold rounded-md bg-blue-200`}
              >
                {time}
              </div>
            </div>
          </div>
          <div className="h-14 w-full flex items-center justify-between border-b-[1px] mb-1">
            <p className="text-base font-normal">Status</p>
            <TaskItemAction status="needsAction" />
          </div>
        </div>
      </div>
      <Footer title="Add Task" whenClick={() => {}} />
    </div>
  );
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
    openGoogleTasksModal(<AddTaskForm label="New Task" />);
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
