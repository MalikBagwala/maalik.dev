import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
  size?: "default" | "large"; // Add size prop
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  as,
  className,
  children,
  size = "default", // Default size is "default"
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";

  // Define size-specific styles
  const sizeClasses =
    size === "large"
      ? "px-8 py-3 text-lg lg:px-10 lg:py-4 lg:text-xl"
      : "px-8 py-3 text-lg";

  return (
    <Component
      className={twMerge(
        "text-white shadow-md relative text-opacity-95",
        "bg-gradient-to-r from-teal-600 to-blue-600",
        "rounded-full font-semibold",
        "transition-all duration-300 ease-in-out",
        "hover:text-opacity-100",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-blue-600 before:to-teal-600",
        "before:rounded-full before:transition-opacity before:duration-300",
        "before:opacity-0 hover:before:opacity-100",
        "overflow-hidden",
        sizeClasses, // Add size-specific classes
        className
      )}
      {...props}
    >
      <span className="relative z-0">{children}</span>
    </Component>
  );
};

export default Button;
