import { useInView, animated } from "@react-spring/web";
import Button from "~/components/Button";
import Section from "~/components/Section/Section";

const Contact = () => {
  // Animation for heading (h5)
  const [headingRef, headingProps] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 25 },
    }),
    { amount: 0.2, once: true }
  );

  // Animation for paragraph (p)
  const [paragraphRef, paragraphProps] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 25 },
    }),
    { amount: 0.2, once: true }
  );

  // Animation for button
  const [buttonRef, buttonProps] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 25 },
    }),
    { amount: 0.2, once: true }
  );

  // Animation for contact links (phone and email)
  const [phoneRef, phoneProps] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 25 },
    }),
    { amount: 0.2, once: true }
  );

  const [emailRef, emailProps] = useInView(
    () => ({
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0px)" },
      config: { tension: 200, friction: 25 },
    }),
    { amount: 0.2, once: true }
  );

  return (
    <Section
      id="contact"
      mainProps={{ className: "flex justify-between items-center" }}
    >
      <div className="flex flex-col gap-6">
        <animated.h5
          ref={headingRef}
          style={headingProps}
          className="text-4xl text-gray-800 font-bold"
        >
          In need of a designer/developer?
        </animated.h5>
        <animated.p
          ref={paragraphRef}
          style={paragraphProps}
          className="text-2xl text-blue-500"
        >
          <span className="pulse" /> I’m currently available for work.
        </animated.p>
        <animated.div ref={buttonRef} style={buttonProps}>
          <Button className="w-fit">Send a message</Button>
        </animated.div>
      </div>
      <div className="flex flex-col gap-2 text-2xl text-gray-500">
        <animated.a
          ref={phoneRef}
          style={phoneProps}
          className="hover:text-blue-500"
          href="tel:+919975130529"
        >
          +91 9975130529
        </animated.a>
        <animated.a
          ref={emailRef}
          style={emailProps}
          className="hover:text-blue-500"
          href="mailto:hello@maalik.dev"
        >
          hello@maalik.dev
        </animated.a>
      </div>
    </Section>
  );
};

export default Contact;
