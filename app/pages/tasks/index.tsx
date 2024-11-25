import TasksList from "~/components/tasks/List";

export default function index() {
  return (
    <div className="w-full h-full pb-16 overflow-x-auto no-scrollbar bg-gray-100">
      <TasksList />
    </div>
  );
}
