import Project from "~/components/Project/Project";
import Section from "~/components/Section/Section";

const PROJECTS = [
  {
    title: "Ubermench",
    subtitle: "An app for the grooming machos",
    background: "rgba(250,204,21)",
  },
  {
    title: "EcoCart",
    subtitle: "Sustainable shopping made easy",
    background: "rgba(72,201,176,1)",
  },
  {
    title: "FitTrack",
    subtitle: "Your personal fitness companion",
    background: "rgba(252,92,101,1)",
  },
  {
    title: "PetConnect",
    subtitle: "Find and care for pets in your area",
    background: "rgba(153,128,250,1)",
  },
  {
    title: "MindfulMe",
    subtitle: "Mental wellness at your fingertips",
    background: "rgba(255,190,118,1)",
  },
  {
    title: "FoodieFind",
    subtitle: "Discover hidden culinary gems",
    background: "rgba(255,121,63,1)",
  },
];

const Projects = () => {
  return (
    <Section
      className="bg-gray-50"
      id="projects"
      title="Projects"
      subtitle="Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design systems which are visually pleasing, user-centric and easy to use."
      mainProps={{ className: "columns-2 gap-10" }}
    >
      {PROJECTS.map((project) => {
        return <Project key={project.title} title={project.title} />;
      })}
    </Section>
  );
};

export default Projects;
