import { Outlet } from "react-router";
import ListHeader from "~/components/Google/TasksList/ListHeader";
import { GoogleTasksModalProvider } from "~/shared/ctxProviders/google";

export default function Layout() {
  return (
    <GoogleTasksModalProvider>
      <div className="w-full h-full sm:w-11/12 sm:h-5/6 sm:rounded-xl relative flex flex-col items-center bg-white">
        <ListHeader />
        <Outlet />
      </div>
    </GoogleTasksModalProvider>
  );
}
