import Burger from "assets/burger.svg";
import CaretDown from "assets/caret-down.svg";
import Filter from "assets/filter.svg";
import Search from "assets/search.svg";

import useCalender from "~/shared/hooks/useCalender";

export default function Header() {
  const { getWeekDays } = useCalender();
  const weekDays = getWeekDays();
  return (
    <nav className="w-full flex flex-col p-5 gap-5">
      <ul className="w-full h-full flex justify-between items-center">
        <li className="h-full flex items-center">
          <button>
            <img src={Burger} alt="Burger" />
          </button>
        </li>
        <li className="h-full flex items-center gap-1">
          <p className="text-xl font-bold text-center">Today</p>
          <button>
            <img src={CaretDown} alt="CaretDown" />
          </button>
        </li>
        <li className="h-full flex items-center gap-5">
          <button>
            <img src={Filter} alt="Filter" />
          </button>
          <button>
            <img src={Search} alt="Search" />
          </button>
        </li>
      </ul>
      <ul className="flex justify-between items-center w-full mx-auto sm:px-2">
        {weekDays.map((day, index) => (
          <li
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
