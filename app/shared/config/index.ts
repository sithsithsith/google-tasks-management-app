import burger from "assets/burger.svg";
import caretDown from "assets/caret-down.svg";
import filter from "assets/filter.svg";
import google from "assets/google.png";
import search from "assets/search.svg";
import welcome from "assets/welcome.png";

export default {
  applicationUrl:
    import.meta.env.VITE_APPLICATION_URL || "http://localhost:3000",
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  googleTaskApiKey: import.meta.env.VITE_GOOGLE_TASKS_API_KEY || "",
  googleTaskServiceEndpoint:
    import.meta.env.VITE_GOOGLE_TASK_SERVICE_ENDPOINT || "",
  googleOauth2Scopes: import.meta.env.VITE_GOOGLE_CLIENT_OAUTH2_SCOPES || "",

  assets: {
    google,
    welcome,
    burger,
    caretDown,
    filter,
    search,
  },

  colorIndications: {
    pending: "#D2D6DB",
    done: "#039855",
  },
};

export const mandatory = [
  "VITE_GOOGLE_CLIENT_ID",
  "VITE_GOOGLE_TASKS_API_KEY",
  "VITE_GOOGLE_TASK_SERVICE_ENDPOINT",
  "VITE_GOOGLE_CLIENT_OAUTH2_SCOPES",
  "VITE_APPLICATION_URL",
];

export function valdiateConfigurations() {
  mandatory.forEach((env) => {
    if (Boolean(import.meta.env[env] === "")) {
      console.warn(`Missing configuration ${env}`);
    }
  });
}
