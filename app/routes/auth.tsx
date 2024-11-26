import { Route } from "./+types/auth";
import { redirect, type MetaFunction } from "react-router";
import Login from "~/pages/login";

export const meta: MetaFunction = () => {
  return [
    { title: "TDApp" },
    { name: "description", content: "Login to manage tasks!" },
  ];
};

export async function clientLoader({}: Route.ClientLoaderArgs) {
  if (typeof window !== undefined) {
    const localToken = localStorage.getItem("access_token") || "";
    if (Boolean(localToken !== "")) {
      return redirect("/tasks");
    }
  }
}

export default function Auth() {
  return <Login />;
}
