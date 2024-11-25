const mockData = [
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
  {
    title: "Typescript JSX",
    text: "Study Typescript JSX",
    status: "todo",
  },
];

export default function ListItem() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {mockData.map((task, index) => (
        <div
          key={index}
          className="p-4 mb-4 bg-white rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold">{task.title}</h2>
            <p className="text-sm text-gray-500">{task.text}</p>
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
      ))}
    </div>
  );
}
