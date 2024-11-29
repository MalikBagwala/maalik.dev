import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import { SOCIALS } from "../Footer";
// import RotateWords from "../RotateWords/RotateWords";
import {
  containerVariants,
  handVariants,
  imageVariants,
  itemVariants,
} from "./Hero.animations";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="content relative">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 opacity-60 dark:opacity-90 dark:contrast-[0.1] z-0"
        style={{
          background: "url(/circuit.svg)",
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
      <div className="container z-10">
        <div className="flex flex-col gap-4 lg:flex-row justify-between min-h-[calc(70dvh)] lg:pt-20">
          <motion.div
            className="flex flex-col gap-4 text-neutral-500 dark:text-neutral-400 lg:max-w-[60%] z-10"
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
          >
            <motion.p className="flex text-2xl gap-2 " variants={itemVariants}>
              <span>Hi there, I&apos;m Malik</span>
              <motion.img
                src="/icons/waving-hand.svg"
                alt="waving-hand"
                className="w-6"
                variants={handVariants}
                animate="wave"
              />
            </motion.p>
            <motion.h2
              className="text-balance text-4xl text-neutral-800 dark:text-neutral-200 select-text font-bold leading-snug"
              variants={itemVariants}
            >
              I help people and brands reach their business goals by designing &
              building{" "}
              <motion.span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-400 font-bold">
                customer-centric software products
              </motion.span>{" "}
              and interactive experiences
            </motion.h2>

            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <Button size="large" as={Link} to={{ hash: "projects" }}>
                View my work
              </Button>
              <a
                className="text-lg font-semibold text-teal-600 dark:text-teal-500"
                href={SOCIALS[0].link}
                target="__blank"
              >
                More about me
              </a>
            </motion.div>
          </motion.div>

          <div className="w-full flex justify-center items-center mt-12 lg:mt-0">
            <motion.img
              initial="hidden"
              animate={isMounted ? "show" : "hidden"}
              variants={imageVariants}
              className="mb-auto h-[20vh] lg:h-[30vh] w-fit rounded-md"
              height={180}
              width={180}
              src="/avatar.webp"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
