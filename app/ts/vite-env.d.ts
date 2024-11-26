/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_CLIENT_ID: string;
  readonly VITE_GOOGLE_TASKS_API_KEY: string;
  readonly VITE_GOOGLE_TASK_SERVICE_ENDPOINT: string;
  readonly VITE_GOOGLE_CLIENT_OAUTH2_SCOPES: string;
  readonly VITE_APPLICATION_URL: string;
  readonly VITE_APPLICATION_STAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
