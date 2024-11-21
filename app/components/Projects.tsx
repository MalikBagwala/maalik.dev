import Project from "~/components/Project/Project";
import Section from "~/components/Section/Section";
export type ProjectType = {
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  sourceCodeLink: string;
  technologies: string[];
  slug: string;
  body?: string;
  isFeatured: boolean;
};

export type ProjectsType = {
  projects: ProjectType[];
};
const Projects = ({ projects }: ProjectsType) => {
  if (!projects.length) return null;
  return (
    <Section
      className="bg-gray-50"
      id="projects"
      title="Projects"
      subtitle="Prototypes, Digital Products (Apps, Websites, SaaS solutions) and design systems which are visually pleasing, user-centric and easy to use."
      mainProps={{ className: "columns-1 lg:columns-2 gap-10" }}
    >
      {projects.map((project) => (
        <Project
          isFeatured={project.isFeatured}
          key={project.title}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          liveLink={project.liveLink}
          sourceCodeLink={project.sourceCodeLink}
          technologies={project.technologies}
          slug={project.slug}
        />
      ))}
    </Section>
  );
};

export default Projects;
