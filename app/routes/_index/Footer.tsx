import { animated, useSpring, useTrail } from "@react-spring/web";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Section from "~/components/Section/Section";
import Github from "~/icons/Github";
import GitLab from "~/icons/GitLab";
import Linkedin from "~/icons/Linkedin";
import Twitter from "~/icons/Twitter";
import Upwork from "~/icons/Upwork";

const SOCIALS = [
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
  const [isHovered, setIsHovered] = useState(false);

  const springProps = useSpring({
    transform: isHovered ? "rotate(360deg)" : "rotate(0deg)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.a
      href={link}
      target="__blank"
      style={springProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="transition-colors hover:fill-blue-500"
    >
      {children}
    </animated.a>
  );
};

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const trail = useTrail(3, {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    from: { opacity: 0, y: 20 },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  const socialTrail = useTrail(SOCIALS.length, {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    from: { opacity: 0, y: 20 },
    config: { mass: 1, tension: 200, friction: 20 },
    delay: 200,
  });

  return (
    <Section
      id="footer"
      mainProps={{ className: "flex justify-between items-start" }}
    >
      <animated.div
        className="flex flex-col text-gray-500"
        style={trail[0]}
        ref={ref}
      >
        <a className="text-blue-500" href="https://maalik.dev" target="__blank">
          Maalik
        </a>
        <p>
          Jamali Residency
          <br /> Nashik, India
          <br />
          422011
        </p>
      </animated.div>

      <animated.div className="flex flex-col text-gray-500" style={trail[1]}>
        <a className="text-blue-500" href="https://maalik.dev" target="__blank">
          Terms & Conditions
        </a>
        <p>© {new Date().getFullYear()} Malik Bagwala</p>
      </animated.div>

      <animated.div className="flex flex-col text-gray-500" style={trail[2]}>
        <div className="flex gap-4 fill-blue-300 items-center">
          {SOCIALS.map((social, index) => (
            <animated.div key={social.link} style={socialTrail[index]}>
              <AnimatedSocialIcon link={social.link}>
                {social.icon}
              </AnimatedSocialIcon>
            </animated.div>
          ))}
        </div>
      </animated.div>
    </Section>
  );
};

export default Footer;
