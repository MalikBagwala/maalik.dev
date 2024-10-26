import Button from "~/components/Button";
import Section from "~/components/Section/Section";

const Contact = () => {
  return (
    <Section
      id="contact"
      mainProps={{ className: "flex justify-between items-center" }}
    >
      <div className="flex flex-col gap-6">
        <h5 className="text-4xl text-gray-800 font-bold">
          In need of a designer/developer?
        </h5>
        <p className="text-2xl text-blue-500">
          <span className="pulse" /> I’m currently available for work.
        </p>
        <Button className="w-fit">Send a message</Button>
      </div>
      <div className="flex flex-col gap-2 text-2xl text-gray-500">
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

export default Contact;
