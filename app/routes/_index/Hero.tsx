import { Link } from "@remix-run/react";
import Button from "~/components/Button";
import { useSpring, useTrail, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Staggered animations for text elements and button/link
  const trail = useTrail(5, {
    opacity: isMounted ? 1 : 0,
    y: isMounted ? 0 : 20,
    from: { opacity: 0, y: 20 },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  // Waving hand animation
  const wavingHand = useSpring({
    transform: isMounted ? "rotate(0deg)" : "rotate(45deg)",
    from: { transform: "rotate(45deg)" },
    config: { duration: 300 },
    loop: { reverse: true },
  });

  // Fade-in animation with slide-up for right image
  const fadeInImage = useSpring({
    opacity: isMounted ? 1 : 0,
    transform: isMounted ? "translateY(0px)" : "translateY(20px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <section className="border-b border-gray-200 content">
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row justify-between min-h-[calc(70vh)] lg:pt-20">
          <div className="flex flex-col gap-4">
            <animated.h3
              className="flex text-2xl gap-2 text-gray-500"
              style={trail[0]}
            >
              <span>Hi there, I&apos;m Malik</span>
              <animated.img
                src="/icons/waving-hand.svg"
                alt="waving-hand"
                className="w-6"
                style={wavingHand}
              />
            </animated.h3>
            <animated.h1
              className="text-4xl font-bold text-gray-800"
              style={trail[1]}
            >
              Fullstack Engineer (ex-CTO)
            </animated.h1>
            <animated.h4
              className="text-balance text-2xl text-gray-500"
              style={trail[2]}
            >
              I help people and brands reach their business goals by designing &
              building customer-centric software products and interactive
              experiences
            </animated.h4>
            <div className="flex items-center gap-4">
              <animated.div style={trail[3]}>
                <Button>View my work</Button>
              </animated.div>
              <animated.div style={trail[4]}>
                <Link
                  className="text-lg font-semibold text-teal-500"
                  to={"#skills"}
                >
                  More about me
                </Link>
              </animated.div>
            </div>
          </div>
          <div>
            <animated.img
              style={fadeInImage}
              className="h-[50vh] w-auto object-cover rounded-md"
              src="https://picsum.photos/id/237/500/500"
              alt="Avatar"
              loading={"eager"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
