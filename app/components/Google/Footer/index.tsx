import StickyFooter from "~/components/Common/Footer/StickyFooter";
import { GoogleFooterProps } from "~/ts/google";

export default function ListFooter({
  title,
  textColor = "text-blue-600",
  whenClick,
}: GoogleFooterProps) {
  return (
    <StickyFooter
      content={
        <button onClick={whenClick} className={textColor}>
          {title}
        </button>
      }
    />
  );
}
