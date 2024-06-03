import { cn } from "@/utils/cn";
import { lusitana } from "@/utils/fonts";

interface Props {
  title: string;
  classNames?: string;
  type?: "submit";
}

export const LitButton = ({ title, classNames, type }: Props) => {
  return (
    <button type={type} className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div
        className={cn(
          "px-8 py-2  bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent",
          `${classNames} ${lusitana.className}`
        )}
      >
        {title}
      </div>
    </button>
  );
};
