import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  route("/", "routes/auth.tsx", [index("pages/login/index.tsx")]),
  layout("pages/tasks/Layout.tsx", [
    route("/tasks", "routes/home.tsx", [index("pages/tasks/index.tsx")]),
  ]),
] satisfies RouteConfig;
