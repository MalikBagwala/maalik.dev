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
const Footer = () => {
  return (
    <Section
      id="footer"
      mainProps={{ className: "flex justify-between items-start" }}
    >
      <div className="flex flex-col text-gray-500">
        <a className="text-blue-500" href="https://maalik.dev" target="__blank">
          Maalik
        </a>
        <p>
          Jamali Residency
          <br /> Singapur Garden, Nashik <br />
          422011
        </p>
        {/* <p>GST NO - NA</p> */}
      </div>
      <div className="flex flex-col text-gray-500">
        <a className="text-blue-500" href="https://maalik.dev" target="__blank">
          Terms & Conditions
        </a>
        <p>© {new Date().getFullYear()} Malik Bagwala</p>
        {/* <p>GST NO - NA</p> */}
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="flex gap-4 fill-blue-300 items-center">
          {SOCIALS.map((social) => {
            return (
              <a key={social.link} href={social.link} target="__blank">
                {social.icon}
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Footer;
