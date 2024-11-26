import { Outlet } from "react-router";
import Footer from "~/components/TodoApp/Footer";
import Header from "~/components/TodoApp/Header";

export default function Layout() {
  return (
    <div className="w-full h-full sm:w-11/12 sm:h-5/6 sm:rounded-xl relative flex flex-col items-center bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
