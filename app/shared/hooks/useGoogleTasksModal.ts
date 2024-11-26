import { useContext } from "react";
import { GoogleTasksModalContext } from "../ctxProviders/google";

export const useGoogleTasksModal = () => {
  const context = useContext(GoogleTasksModalContext);
  if (!context) {
    throw new Error(
      "useGoogleTasksModal must be used within a GoogleTasksModalProvider"
    );
  }
  return context;
};
