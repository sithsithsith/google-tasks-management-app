import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/login.tsx"),
  layout("pages/tasks/Layout.tsx", [
    route("/tasks", "routes/home.tsx", [index("pages/tasks/index.tsx")]),
  ]),
] satisfies RouteConfig;
