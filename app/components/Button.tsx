import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  as,
  className,
  children,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  return (
    <Component
      className={twMerge(
        "text-white px-8 py-3 text-lg shadow-md relative text-opacity-95",
        "bg-gradient-to-r from-secondary-500 to-primary-700",
        "rounded-full font-semibold",
        "transition-all duration-300 ease-in-out",
        "hover:text-opacity-100",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-primary-700 before:to-secondary-500",
        "before:rounded-full before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100",
        "overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="relative z-0">{children}</span>
    </Component>
  );
};

export default Button;
