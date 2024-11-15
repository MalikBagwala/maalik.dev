import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "~/components/Button";
import { SOCIALS } from "../Footer";
import {
  containerVariants,
  handVariants,
  imageVariants,
  itemVariants,
} from "./Hero.animations";
import { Link } from "@remix-run/react";
import RotateWords from "../RotateWords/RotateWords";

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url('/circuit.svg')",
      }}
      className="border-b border-gray-200 content"
    >
      <div className="container">
        <div className="flex flex-col gap-4 lg:flex-row justify-between min-h-[calc(70dvh)] lg:pt-20">
          <motion.div
            className="flex flex-col gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isMounted ? "show" : "hidden"}
          >
            <motion.p
              className="flex text-2xl gap-2 text-gray-500"
              variants={itemVariants}
            >
              <span>Hi there, I&apos;m Malik</span>
              <motion.img
                src="/icons/waving-hand.svg"
                alt="waving-hand"
                className="w-6"
                variants={handVariants}
                animate="wave"
              />
            </motion.p>
            <div className="text-5xl overflow-hidden font-bold text-gray-800 relative py-2">
              <RotateWords />
            </div>
            <motion.h2
              className="text-balance text-2xl text-gray-500"
              variants={itemVariants}
            >
              I help people and brands reach their business goals by designing &
              building customer-centric software products and interactive
              experiences
            </motion.h2>

            <motion.div
              className="flex items-center gap-4"
              variants={itemVariants}
            >
              <Button as={Link} to={{ hash: "projects" }}>
                View my work
              </Button>
              <a
                className="text-lg font-semibold text-teal-700"
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
