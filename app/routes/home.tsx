import { Outlet, redirect, type MetaFunction } from "react-router";
import { Route } from "./+types/home";

export const meta: MetaFunction = () => {
  return [
    { title: "TD App" },
    { name: "description", content: "Welcome back to TD App!" },
  ];
};

export async function clientLoader({}: Route.ClientLoaderArgs) {
  if (typeof window !== undefined) {
    const localToken = localStorage.getItem("access_token") || "";
    if (Boolean(localToken === "")) {
      return redirect("/login");
    }
  }
}

export default function HomePage() {
  return <Outlet />;
}
