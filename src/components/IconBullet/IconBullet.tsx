import { ReactElement, cloneElement } from "react";

type IconBulletProps = {
  icon: ReactElement;
  text: string;
};

const IconBullet = ({ icon, text }: IconBulletProps) => {
  return (
    <li className="grid grid-cols-[2rem,2fr] gap-2 items-start">
      {cloneElement(icon, { size: 25, className: "text-blue-800" })}
      <p className="leading-none">{text}</p>
    </li>
  );
};

export { IconBullet };
