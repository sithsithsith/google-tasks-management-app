import { Route } from "./+types/home";
import { Outlet, redirect, type MetaFunction } from "react-router";

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
      return redirect("/");
    }
  }
}

export default function Home() {
  return <Outlet />;
}
