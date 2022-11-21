import clsx from "clsx";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface MenuCardProp {
  icon: ReactNode;
  text: string;
  style?: string;
}

function MenuCard({ icon, text, style }: MenuCardProp) {
  return (
    <div className={clsx("rounded-md bg-blue-300 h-28 w-56 text-white", style)}>
      {text}
      <div>{icon}</div>
    </div>
  );
}

export default MenuCard;
