import Project from "~/components/Project/Project";
import Section from "~/components/Section/Section";
type ProjectType = {
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  sourceCodeLink: string;
  technologies: string[];
  slug: string;
};

export type ProjectsType = {
  projects: ProjectType[];
};
const Projects = ({ projects }: ProjectsType) => {
  return (
    <Section
      className="bg-gray-50"
      id="projects"
      title="Projects"
      subtitle="Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design systems which are visually pleasing, user-centric and easy to use."
      mainProps={{ className: "columns-1 lg:columns-2 gap-10" }}
    >
      {projects.length
        ? projects.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              liveLink={project.liveLink}
              sourceCodeLink={project.sourceCodeLink}
              technologies={project.technologies}
            />
          ))
        : null}
    </Section>
  );
};

export default Projects;
