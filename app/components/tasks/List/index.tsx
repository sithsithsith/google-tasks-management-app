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

import { useEffect, useRef, useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState(mockData.slice(0, 6)); // Initial tasks
  const [hasMore, setHasMore] = useState(true); // Flag to track more data
  const observerRef = useRef<IntersectionObserver | null>(null); // Ref for observer

  // Fetch more data (simulates an API call)
  const loadMoreTasks = () => {
    if (tasks.length >= mockData.length) {
      setHasMore(false); // No more data to load
      return;
    }

    // Simulate API delay
    setTimeout(() => {
      const nextTasks = mockData.slice(tasks.length, tasks.length + 6);
      setTasks((prev) => [...prev, ...nextTasks]); // Append new tasks
    }, 500);
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (entry.isIntersecting && hasMore) {
        loadMoreTasks();
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback);

    // Observe the last item
    const lastTaskElement = document.querySelector(".loader") as HTMLElement;
    if (lastTaskElement) {
      observerRef.current.observe(lastTaskElement);
    }

    return () => {
      // Cleanup observer on component unmount or dependency change
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [tasks, hasMore]); // Run effect on tasks or hasMore changes

  return (
    <div className="flex-1 overflow-y-auto p-4">
      {tasks.map((task, index) => (
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
      {hasMore && (
        <div className="text-center py-4 text-gray-500 loader">
          Loading more tasks...
        </div>
      )}
    </div>
  );
}
