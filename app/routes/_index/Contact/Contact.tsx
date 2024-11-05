import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "~/components/Button";
import Section from "~/components/Section/Section";
import { containerVariants, itemVariants } from "../Hero/Hero.animations";
const Contact = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  return (
    <Section id="contact">
      <motion.div
        ref={ref}
        className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-center lg:justify-between items-start lg:items-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        <div className="flex flex-col gap-4 lg:gap-6">
          <motion.h5
            variants={itemVariants}
            className="text-3xl lg:text-4xl text-gray-800 font-bold"
          >
            In need of a designer/developer?
          </motion.h5>
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-blue-500"
          >
            <span className="pulse" /> I’m currently available for work.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button className="w-fit">Send a message</Button>
          </motion.div>
        </div>
        <div className="flex flex-col gap-2 text-2xl text-gray-500">
          <motion.a
            variants={itemVariants}
            className="hover:text-blue-500"
            href="tel:+919975130529"
          >
            +91 9975130529
          </motion.a>
          <motion.a
            variants={itemVariants}
            className="hover:text-blue-500"
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
