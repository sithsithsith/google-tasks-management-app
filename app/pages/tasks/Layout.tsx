import { Outlet } from "react-router";
import Footer from "~/components/tasks/Footer/Footer";
import CalendarNav from "~/components/tasks/Header/CalendarNav";
import Nav from "~/components/tasks/Header/Nav";

export default function Layout() {
  return (
    <div className="relative w-full h-full sm:w-11/12 sm:h-5/6 flex flex-col items-center bg-white">
      <Nav />
      <CalendarNav />
      <Outlet />
      <Footer />
    </div>
  );
}
