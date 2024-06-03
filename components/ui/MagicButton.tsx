import { cn } from "@/utils/cn";
import { lusitana } from "@/utils/fonts";

interface Props {
  title: string;
  classNames?: string;
}

export const MagicButton = ({ title, classNames }: Props) => {
  return (
    <button
      className={cn(
        `relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`,
        `${classNames}`
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl hover:bg-white hover:text-black ${lusitana.className}`}
      >
        {title}
      </span>
    </button>
  );
};
