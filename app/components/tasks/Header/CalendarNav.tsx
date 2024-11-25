import useCalender from "~/utilies/hooks/useCalender";

export default function CalendarNav() {
  const { getWeekDays } = useCalender();
  const days = getWeekDays();

  return (
    <div className="flex justify-between h-20 items-center w-full mx-auto px-2 py-5 sm:px-4">
      {days.map((day, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center text-center space-y-1"
        >
          <span className={`text-sm ${day.blur && "text-gray-300"}`}>
            {day.name}
          </span>
          <span
            className={`text-lg font-semibold w-10 h-10 flex items-center justify-center rounded-full ${
              day.active ? "text-white bg-blue-600" : "text-black"
            } ${day.blur && "text-gray-300"}`}
          >
            {day.date}
          </span>
        </div>
      ))}
    </div>
  );
}
