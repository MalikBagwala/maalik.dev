import { animated, useSpring } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";
import Star from "~/icons/Star";

type TestimonialType = {
  index: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  testimonial: any;
};
const Testimonial = ({ index, testimonial }: TestimonialType) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once when visible
    threshold: 0.1,
  });

  // Determine column and animation direction
  const column = index % 3;
  const delay = Math.random() * 300;

  // Different animations based on column
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform:
      column === 0
        ? inView
          ? "translateX(0px)"
          : "translateX(-30px)" // Left to right for col 1
        : column === 1
        ? inView
          ? "translateY(0px)"
          : "translateY(30px)" // Bottom to top for col 2
        : inView
        ? "translateX(0px)"
        : "translateX(30px)", // Right to left for col 3
    config: { tension: 150, friction: 20 },
    delay,
  });

  const isHighlight = testimonial.highlighted ? true : false;

  return (
    <animated.div
      key={testimonial.id}
      ref={ref}
      style={animationProps}
      id={`testimonials-${testimonial.id}`}
      className="flex justify-center items-center"
    >
      <div
        style={{
          boxShadow: "0 2px 4px 0 rgba(14, 30, 37, 0.12)",
        }}
        className={twMerge(
          "rounded-xl px-6 py-8 flex flex-col justify-between text-gray-500 h-fit bg-white relative",
          isHighlight &&
            "bg-gradient-to-r from-teal-600 to-blue-600 text-gray-50"
        )}
      >
        <blockquote className="text-lg text-balance text-center leading-relaxed">
          {'"'}
          {testimonial.comment}
          {'"'}
        </blockquote>
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
                "text-gray-800 font-bold",
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
              className="absolute -top-2 left-8 fill-gray-700"
              height={20}
            />
            <Star
              className="absolute top-6 -right-[12px] fill-amber-400"
              height={12}
            />
            <Star
              className="absolute -bottom-5 right-12 fill-gray-700"
              height={40}
            />
          </>
        )}
      </div>
    </animated.div>
  );
};

export default Testimonial;