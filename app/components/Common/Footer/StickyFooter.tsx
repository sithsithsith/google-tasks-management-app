import { ReactElement } from "react";

export default function StickyFooter({ content }: { content: ReactElement }) {
  return (
    <div className="h-20 bg-white text-center p-4 absolute bottom-0 left-0 w-full">
      {content}
    </div>
  );
}
