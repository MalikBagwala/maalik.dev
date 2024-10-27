import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonType = ComponentPropsWithoutRef<"button">;
const Button = ({ className, children, ...props }: ButtonType) => {
  return (
    <button
      className={twMerge(
        "text-white px-8 py-3 text-lg shadow-md relative text-opacity-95",
        "bg-gradient-to-r from-teal-500 to-blue-700",
        "rounded-full font-semibold",
        "transition-all duration-300 ease-in-out",
        "hover:text-opacity-100",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-blue-700 before:to-teal-500",
        "before:rounded-full before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
