import type { MetaFunction } from "@remix-run/node";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
export const meta: MetaFunction = () => {
  return [
    { title: "Malik Bagwala | Freelance Software Engineer" },
    {
      name: "description",
      content:
        "I help people and brands reach their business goals by designing & building customer-centric software products and interactive experiences",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
