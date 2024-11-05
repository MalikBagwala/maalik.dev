import { motion } from "framer-motion";
import Section from "~/components/Section/Section";
import Github from "~/icons/Github";
import GitLab from "~/icons/GitLab";
import Linkedin from "~/icons/Linkedin";
import Twitter from "~/icons/Twitter";
import Upwork from "~/icons/Upwork";
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
const AnimatedSocialIcon = ({ children, link }: any) => {
  return (
    <motion.a
      href={link}
      target="__blank"
      initial={{ rotate: "0deg" }}
      whileHover={{ rotate: "360deg", scale: 1.5 }}
      className="transition-colors hover:fill-blue-500"
    >
      {children}
    </motion.a>
  );
};

const Footer = () => {
  return (
    <Section id="footer">
      <motion.div className="flex flex-col gap-8 lg:gap-0 text-center lg:flex-row justify-center lg:justify-between items-center lg:items-start">
        <motion.div className="flex flex-col text-gray-500">
          <a
            className="text-blue-500"
            href="https://maalik.dev"
            target="__blank"
          >
            Maalik
          </a>
          <p>
            Jamali Residency
            <br /> Nashik, India
            <br />
            422011
          </p>
        </motion.div>

        <motion.div className="flex flex-col text-gray-500">
          <a
            className="text-blue-500"
            href="https://maalik.dev"
            target="__blank"
          >
            Terms & Conditions
          </a>
          <p>© {new Date().getFullYear()} Malik Bagwala</p>
        </motion.div>

        <motion.div className="flex flex-col text-gray-500">
          <motion.div
            initial={{ gap: "16px" }}
            whileHover={{ gap: "20px" }}
            className="flex fill-blue-300 items-center"
          >
            {SOCIALS.map((social) => (
              <AnimatedSocialIcon link={social.link} key={social.link}>
                {social.icon}
              </AnimatedSocialIcon>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Footer;
