import { ComponentProps } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

type SectionProps = ComponentProps<"section"> & {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  mainProps?: ComponentProps<"main">;
  containerClassName?: ClassNameValue;
};

const Section = ({
  id,
  children,
  className,
  title,
  subtitle,
  mainProps,
  containerClassName,
  ...props
}: SectionProps) => {
  return (
    <section
      id={id}
      {...props}
      className={twMerge(
        "py-24 border-b border-gray-200 last-of-type:border-none",
        className
      )}
    >
      <div className={twMerge("container", containerClassName)}>
        {title && (
          <header className="w-full text-center flex flex-col gap-y-2 mb-10">
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            {subtitle && (
              <p className="text-2xl text-gray-500 text-balance">{subtitle}</p>
            )}
          </header>
        )}
        <main {...mainProps}>{children}</main>
      </div>
    </section>
  );
};

export default Section;
