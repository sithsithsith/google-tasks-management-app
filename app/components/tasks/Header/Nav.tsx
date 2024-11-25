import Burger from "~/components/tasks/Header/assets/burger.svg";
import CaretDown from "~/components/tasks/Header/assets/caret-down.svg";
import Filter from "~/components/tasks/Header/assets/filter.svg";
import Search from "~/components/tasks/Header/assets/search.svg";

export default function Nav() {
  return (
    <div className="w-full h-12 px-5">
      <ul className="w-full h-full flex justify-between items-center">
        <li>
          <button>
            <img src={Burger} alt="Burger" />
          </button>
        </li>
        <li>
          <div className="h-full flex items-center gap-1">
            <p className="text-xl text-center">Today</p>
            <button>
              <img src={CaretDown} alt="CaretDown" />
            </button>
          </div>
        </li>
        <li>
          <div className="h-full flex items-center gap-5">
            <button>
              <img src={Filter} alt="Filter" />
            </button>
            <button>
              <img src={Search} alt="Search" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
