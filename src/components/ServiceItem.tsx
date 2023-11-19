import { HTMLAttributes, ElementType } from "react";
import { twMerge } from "tailwind-merge";

interface ServiceItemProps extends HTMLAttributes<HTMLSpanElement> {
  icon: ElementType;
  title: string;
  description: string;
}

export function ServiceItem({
  icon: Icon,
  title,
  description,
  ...rest
}: ServiceItemProps) {
  return (
    <>
      <div className="flex flex-col items-center gap-y-4">
        <span
          className={twMerge(
            "w-32 h-32 flex items-center justify-center rounded-3xl shadow text-white",
            rest.className
          )}
        >
          <Icon size={60} />
        </span>
        <h3 className="text-gray-800 font-semibold text-xl">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </>
  );
}
