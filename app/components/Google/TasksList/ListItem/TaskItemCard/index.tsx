import config from "~/shared/config";
import Rhombus from "~/components/Google/TasksList/Rhombus";
import {
  GoogleTaskItemCardProps,
  GoogleTaskItemInfoProps,
  GoogleTaskItemActionProps,
} from "~/ts/google";

export function TaskItemAction({ status }: GoogleTaskItemActionProps) {
  const bgColor =
    status === "needsAction"
      ? config.colorIndications.pending
      : config.colorIndications.done;

  const label = status === "needsAction" ? "To do" : "Complete";

  return (
    <div
      style={{
        background: bgColor,
      }}
      className={`min-w-24 min-h-9 px-3 flex items-center justify-center py-1 text-sm font-bold rounded-md text-white`}
    >
      {label}
    </div>
  );
}

export function TaskItemInfo({
  status,
  title,
  notes,
}: GoogleTaskItemInfoProps) {
  const svgFill =
    status === "needsAction"
      ? config.colorIndications.pending
      : config.colorIndications.done;

  return (
    <div className="w-full h-full flex gap-3">
      <span className="h-1/2 flex items-center">
        <Rhombus fill={svgFill} />
      </span>
      <span className="w-full">
        <h2 className="w-36 sm:w-4/5 overflow-hidden text-base text-ellipsis whitespace-nowrap font-semibold">
          {title}
        </h2>
        <p className="w-36 sm:w-4/5 overflow-hidden text-xs text-ellipsis whitespace-nowrap text-gray-500">
          {notes}
        </p>
      </span>
    </div>
  );
}

export default function TaskItemCard({
  task: { status, title, notes },
}: GoogleTaskItemCardProps) {
  const borderColor =
    status === "needsAction"
      ? config.colorIndications.pending
      : config.colorIndications.done;

  return (
    <div
      style={{
        borderColor,
      }}
      className="cursor-pointer p-4 h-20 mb-4 bg-white rounded-md shadow flex gap-2 justify-between items-center border-l-4 sm:border-l-8"
    >
      <TaskItemInfo status={status} title={title} notes={notes} />
      <TaskItemAction status={status} />
    </div>
  );
}
