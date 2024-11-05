import Section from "~/components/Section/Section";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const SKILLS = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "NextJs",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "NodeJS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "AWS",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/aws.svg",
  },
  {
    name: "Remix",
    logo: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/remix.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
  {
    name: "Terraform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
  },
  {
    name: "CI/CD",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", // using GitLab logo as a general CI/CD symbol
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Skill = ({ skill, index }: { skill: any; index: number }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Set random initial animation directions
  const directions = [
    "translateX(-20px)",
    "translateX(20px)",
    "translateY(-20px)",
    "translateY(20px)",
  ];
  const initialTransform = directions[index % directions.length];
  const delay = Math.random() * 200;

  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translate(0px, 0px)" : initialTransform,
    config: { tension: 120, friction: 15 },
    delay,
  });
  return (
    <animated.li
      key={skill.name}
      ref={ref}
      style={{
        ...animationProps,
        boxShadow:
          "0 2px 6px 0 rgba(0, 0, 0, .05), 0 0 3px 0 rgba(0, 0, 0, .1)",
      }}
      className="p-4 rounded-lg flex flex-col items-center justify-center m-2 w-32 h-32 gap-4"
    >
      <img
        loading="lazy"
        className="h-10 w-auto"
        src={skill.logo}
        alt={""}
        width={"auto"}
      />
      <p className="font-bold text-gray-800">{skill.name}</p>
    </animated.li>
  );
};

const Skills = () => {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="For those who know what they’re looking for.."
    >
      <ul className="flex flex-wrap justify-center">
        {SKILLS.map((skill, index) => {
          return <Skill key={skill.name} skill={skill} index={index} />;
        })}
      </ul>
    </Section>
  );
};

export default Skills;
