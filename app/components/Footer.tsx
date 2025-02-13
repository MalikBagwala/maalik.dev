import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "~/components/Section/Section";
import Github from "~/icons/Github";
import GitLab from "~/icons/GitLab";
import Linkedin from "~/icons/Linkedin";
import Twitter from "~/icons/Twitter";
import Upwork from "~/icons/Upwork";
import { containerVariants, itemVariants } from "./Hero/Hero.animations";
import Heart from "~/icons/Heart";
export const SOCIALS = [
  {
    icon: <Linkedin height={22} className="social" />,
    link: "https://www.linkedin.com/in/malikbagwala",
  },
  {
    icon: <Github height={22} className="social" />,
    link: "https://github.com/MalikBagwala",
  },
  {
    icon: <Twitter height={22} className="social" />,
    link: "https://x.com/MalikBagwala",
  },
  {
    icon: <GitLab height={22} className="social" />,
    link: "https://gitlab.com/MalikBagwala",
  },
  {
    icon: <Upwork height={22} className="social" />,
    link: "https://www.upwork.com/freelancers/~01142ad14ffbcfbe3b",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnimatedSocialIcon = ({ children, link, isFirst, isLast }: any) => {
  return (
    <motion.a
      href={link}
      target="__blank"
      whileHover={"pop"}
      whileFocus={"pop"}
      variants={{
        ...itemVariants,
        pop: {
          rotate: "360deg",
          scale: 2,
          marginLeft: isFirst ? 0 : "12px",
          marginRight: isLast ? 0 : "12px",
        },
      }}
      className="transition-colors fill-neutral-700 dark:fill-neutral-500  hover:fill-blue-600 dark:hover:fill-blue-400"
    >
      {children}
    </motion.a>
  );
};

const Footer = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <Section id="footer">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="flex flex-col gap-8 lg:gap-0 text-center lg:flex-row justify-center lg:justify-between items-center lg:items-start"
      >
        <motion.div className="flex flex-col text-neutral-700 dark:text-neutral-500 shrink-0 w-1/3">
          <motion.a
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400"
            href="https://maalik.dev"
            target="__blank"
          >
            Maalik
          </motion.a>
          <motion.p variants={itemVariants}>
            Jamali Residency
            <br /> Nashik, India
            <br />
            422011
          </motion.p>
        </motion.div>

        <motion.div className="flex flex-col text-neutral-700 dark:text-neutral-500 shrink-0 w-1/3">
          <motion.a
            variants={itemVariants}
            className="text-blue-600 dark:text-blue-400"
            href="https://maalik.dev"
            target="__blank"
          >
            Terms & Conditions
          </motion.a>
          <motion.p variants={itemVariants}>
            © {new Date().getFullYear()} Malik Bagwala
          </motion.p>
        </motion.div>

        <motion.div className="flex justify-center w-1/3">
          <motion.div
            initial={{ gap: "16px" }}
            className="flex fill-blue-400 items-center"
          >
            {SOCIALS.map((social, index) => (
              <AnimatedSocialIcon
                link={social.link}
                key={social.link}
                isFirst={index === 0}
                isLast={index === SOCIALS.length - 1}
              >
                {social.icon}
              </AnimatedSocialIcon>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="py-4 text-center text-neutral-700 dark:text-neutral-500 text-lg flex items-center justify-center">
        Built with <Heart className="size-5 text-red-700 inline mx-1" /> in
        <span className="ml-1">🇮🇳</span>
      </motion.div>
    </Section>
  );
};

export default Footer;
