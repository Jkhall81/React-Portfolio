import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const GridBackground = ({ children }: Props) => {
  return (
    <div className="h-full min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-start justify-start">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute h-full pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
};
export default GridBackground;
