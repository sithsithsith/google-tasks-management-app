export default {
  applicationUrl:
    import.meta.env.VITE_APPLICATION_URL || "http://localhost:3000",
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  googleTaskApiKey: import.meta.env.VITE_GOOGLE_TASKS_API_KEY || "",
  googleTaskServiceEndpoint:
    import.meta.env.VITE_GOOGLE_TASK_SERVICE_ENDPOINT || "",
  googleOauth2Scopes: import.meta.env.VITE_GOOGLE_CLIENT_OAUTH2_SCOPES || "",
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
