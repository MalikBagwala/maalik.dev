import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "~/components/Button";
import Section from "~/components/Section/Section";
import { containerVariants, itemVariants } from "../Hero/Hero.animations";
import Pulse from "../Pulse/Pulse";
import WhatsApp from "~/icons/WhatsApp";
const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Section id="contact">
      <motion.div
        ref={ref}
        className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between items-center text-center lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          <motion.p
            variants={itemVariants}
            className="text-3xl lg:text-4xl text-neutral-800 font-bold"
          >
            In need of a developer?
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-primary"
          >
            <Pulse /> I’m currently available for work.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button as="a" href="https://wa.me/+919975130529" className="w-fit">
              Send a message
            </Button>
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 text-2xl">
          <div className="flex flex-col items-center">
            <motion.a
              whileHover={{ translateY: -4, scale: 1.05 }}
              variants={itemVariants}
              className="bg-[#25d366] text-white rounded-full py-2 px-4 flex justify-center items-center gap-2"
              href="https://wa.me/+919975130529"
            >
              <WhatsApp className="size-8" /> <span>+91 9975130529</span>
            </motion.a>
            <span className="text-sm text-neutral-500">
              Also available on{" "}
              <span className="text-neutral-700">facetime</span>
            </span>
          </div>
          <motion.a
            variants={itemVariants}
            className="text-neutral-500 hover:text-primary font-semibold transition-colors"
            href="mailto:hello@maalik.dev"
          >
            hello@maalik.dev
          </motion.a>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
