import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GridBackground = ({ children }: Props) => {
  return (
    <div className="h-full w-full dark:bg-black bg-white  dark:bg-grid-lime-500/[0.4] bg-grid-black/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      {children}
    </div>
  );
};
export default GridBackground;
