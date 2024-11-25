export default {
  googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
  googleTaskApiKey: import.meta.env.VITE_GOOGLE_TASKS_API_KEY || "",
};

export const mandatory = ["VITE_GOOGLE_CLIENT_ID", "VITE_GOOGLE_TASKS_API_KEY"];

export function valdiateConfigurations() {
  mandatory.forEach((env) => {
    if (Boolean(import.meta.env[env] === "")) {
      console.warn(`Missing configuration ${env}`);
    }
  });
}
