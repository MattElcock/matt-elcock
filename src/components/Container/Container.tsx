import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  colourdBackground?: boolean;
};

const Container = ({ colourdBackground, children }: ContainerProps) => {
  return (
    <div
      className={`${
        colourdBackground &&
        "bg-gradient-to-br from-violet-700 from-40% to-blue-800 via-40% text-slate-50"
      }`}
    >
      <div className="space-y-5 px-3 py-5 md:container md:mx-auto">
        {children}
      </div>
    </div>
  );
};

export { Container };
