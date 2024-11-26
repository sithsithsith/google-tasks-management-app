import TaskItemCard from "~/components/Google/TasksList/ListItem/TaskItemCard";
import { GoogleTasksListItemProps } from "~/ts/google";

export default function ListItem({ tasklist }: GoogleTasksListItemProps) {
  return (
    <>
      {tasklist.items.map((task, index) => (
        <TaskItemCard key={index} task={task} />
      ))}
    </>
  );
}
