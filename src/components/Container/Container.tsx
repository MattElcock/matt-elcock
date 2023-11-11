import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  colourdBackground?: boolean;
};

const Container = ({ colourdBackground, children }: ContainerProps) => {
  return (
    <div
      className={`space-y-5 px-3 py-5 ${
        colourdBackground &&
        "bg-gradient-to-br from-violet-700 from-40% to-blue-800 via-40% text-slate-50"
      }`}
    >
      {children}
    </div>
  );
};

export { Container };
