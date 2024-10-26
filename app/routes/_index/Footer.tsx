import Section from "~/components/Section/Section";

const Footer = () => {
  return (
    <Section
      id="footer"
      mainProps={{ className: "flex justify-between items-center" }}
    >
      <div className="flex flex-col gap-2 text-gray-500">
        <a className="hover:text-blue-500" href="tel:+919975130529">
          +91 9975130529
        </a>
        <a className="hover:text-blue-500" href="mailto:hello@maalik.dev">
          hello@maalik.dev
        </a>
      </div>
      <div className="flex flex-col gap-2 text-gray-500">
        <a className="hover:text-blue-500" href="tel:+919975130529">
          +91 9975130529
        </a>
        <a className="hover:text-blue-500" href="mailto:hello@maalik.dev">
          hello@maalik.dev
        </a>
      </div>
      <div className="flex flex-col gap-2 text-gray-500">
        <a className="hover:text-blue-500" href="tel:+919975130529">
          +91 9975130529
        </a>
        <a className="hover:text-blue-500" href="mailto:hello@maalik.dev">
          hello@maalik.dev
        </a>
      </div>
    </Section>
  );
};

export default Footer;
