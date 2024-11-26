import { createContext, useState, ReactNode } from "react";
import { GoogleTasksModalContextType } from "~/ts/google";

export const GoogleTasksModalContext = createContext<
  GoogleTasksModalContextType | undefined
>(undefined);

export function GoogleTasksModalProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openGoogleTasksModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeGoogleTasksModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <GoogleTasksModalContext.Provider
      value={{ openGoogleTasksModal, closeGoogleTasksModal }}
    >
      {children}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg max-w-screen-xl w-11/12 h-3/4 relative">
            {modalContent}
          </div>
        </div>
      )}
    </GoogleTasksModalContext.Provider>
  );
}
