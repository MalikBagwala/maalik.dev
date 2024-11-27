import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import Star from "~/icons/Star";
type TestimonialType = {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  testimonial: any;
};

const Testimonial = ({ index, testimonial }: TestimonialType) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const column = index % 3;
  const delay = (Math.random() * 350) / 1000;
  const isHighlight = testimonial.highlighted;

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        translateX: column === 0 ? "-60px" : column === 2 ? "60px" : "0px",
        translateY: column === 1 ? "60px" : "0px",
      }}
      animate={
        inView
          ? {
              opacity: 1,
              // transform: "translateX(0px) translateY(0px)",
              translateX: "0px",
              translateY: "0px",
            }
          : undefined
      }
      transition={{ duration: 1, type: "spring", delay }}
      key={testimonial.id}
      id={`testimonials-${testimonial.id}`}
      className="flex justify-center items-center"
    >
      <div
        style={{
          boxShadow: "0 2px 4px 0 rgba(14, 30, 37, 0.12)",
        }}
        className={twMerge(
          "rounded-xl px-6 py-8 flex flex-col justify-between text-neutral-500 h-fit bg-white relative",
          isHighlight &&
            "bg-gradient-to-r from-teal-500 to-blue-600 text-neutral-50"
        )}
      >
        <blockquote
          className="text-lg text-balance text-center leading-relaxed"
          dangerouslySetInnerHTML={{ __html: testimonial.comment }}
        />
        <footer className="flex items-center gap-4 justify-center mt-8">
          <img
            loading="lazy"
            className="rounded-full flex-shrink-0 flex-grow-0 object-cover w-12 h-12"
            src={testimonial.avatar}
            alt={testimonial.name}
            height={40}
            width={40}
          />
          <div>
            <h6
              className={twMerge(
                "text-neutral-800 font-bold",
                isHighlight && "text-white"
              )}
            >
              {testimonial.name}
            </h6>
            <p>{testimonial.designation}</p>
          </div>
        </footer>
        {isHighlight && (
          <>
            <Star
              className="absolute top-6 -left-[12px] fill-amber-400"
              height={30}
            />
            <Star
              className="absolute -top-2 left-8 fill-amber-600"
              height={20}
            />
            <Star
              className="absolute top-6 -right-[12px] fill-amber-400"
              height={12}
            />
            <Star
              className="absolute -bottom-5 right-12 fill-amber-600"
              height={40}
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Testimonial;
