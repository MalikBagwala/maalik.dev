import Project from "~/components/Project/Project";
import Section from "~/components/Section/Section";

const PROJECTS = [
  {
    title: "Ubermench",
    subtitle: "An app for the grooming machos",
    description:
      "Ubermench is a premium platform bridging the gap between top grooming professionals and clients seeking quality services. From barbershops to skincare experts, this app ensures a refined experience for the modern man.",
    thumbnail: "https://picsum.photos/600/600?random=1",
    liveLink: "https://ubermench.com",
    sourceCodeLink: "https://github.com/username/ubermench",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Hasura",
      "Terraform",
      "AWS",
      "Django",
      "Caddy",
    ],
  },
  {
    title: "EcoCart",
    subtitle: "Sustainable shopping made easy",
    description:
      "EcoCart simplifies eco-conscious shopping by promoting sustainable products while allowing users to track their carbon footprint. Discover items that contribute to a greener planet with every purchase.",
    thumbnail: "https://picsum.photos/600/600?random=2",
    liveLink: "https://ecocart.com",
    sourceCodeLink: "https://github.com/username/ecocart",
    technologies: ["NodeJS", "GraphQL", "MongoDB", "Express", "React"],
  },
  {
    title: "FitTrack",
    subtitle: "Your personal fitness companion",
    description:
      "FitTrack offers a comprehensive suite for tracking workouts, nutrition, and fitness goals, helping users stay motivated and monitor progress. A must-have app for fitness enthusiasts aiming for a healthier lifestyle.",
    thumbnail: "https://picsum.photos/600/600?random=3",
    liveLink: "https://fittrack.com",
    sourceCodeLink: "https://github.com/username/fittrack",
    technologies: ["React Native", "Redux", "Firebase", "TypeScript"],
  },
  {
    title: "PetConnect",
    subtitle: "Find and care for pets in your area",
    description:
      "PetConnect is a social platform for pet owners and animal lovers to connect, adopt pets, and discover local resources for pet care. From adoption to pet care tips, it brings together a compassionate community.",
    thumbnail: "https://picsum.photos/600/600?random=4",
    liveLink: "https://petconnect.com",
    sourceCodeLink: "https://github.com/username/petconnect",
    technologies: [
      "Vue",
      "Django",
      "PostgreSQL",
      "Tailwind CSS",
      "JavaScript",
      "Heroku",
    ],
  },
  {
    title: "MindfulMe",
    subtitle: "Mental wellness at your fingertips",
    description:
      "MindfulMe is dedicated to mental health, offering guided meditations, breathing exercises, and daily check-ins to foster mindfulness. It empowers users with tools for managing stress and improving overall well-being.",
    thumbnail: "https://picsum.photos/600/600?random=5",
    liveLink: "https://mindfulme.com",
    sourceCodeLink: "https://github.com/username/mindfulme",
    technologies: ["React", "Redux", "AWS", "NodeJS", "TypeScript"],
  },
  {
    title: "FoodieFind",
    subtitle: "Discover hidden culinary gems",
    description:
      "FoodieFind is a vibrant community platform for food lovers to explore, share, and rate local dining spots. Ideal for discovering unique flavors, hidden gems, and neighborhood favorites with trusted recommendations.",
    thumbnail: "https://picsum.photos/600/600?random=6",
    liveLink: "https://foodiefind.com",
    sourceCodeLink: "https://github.com/username/foodiefind",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "GraphQL",
    ],
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
      {PROJECTS.map((project) => (
        <Project
          key={project.title}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          liveLink={project.liveLink}
          sourceCodeLink={project.sourceCodeLink}
          technologies={project.technologies}
        />
      ))}
    </Section>
  );
};

export default Projects;
