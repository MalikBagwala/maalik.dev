import { Link } from "@remix-run/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Github from "~/icons/Github";
type ProjectProps = {
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  sourceCodeLink: string;
  technologies: string[];
  slug: string;
};

const Project = (project: ProjectProps) => {
  const {
    title,
    description,
    thumbnail,
    liveLink,
    sourceCodeLink,

    slug,
  } = project;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 100 }}
      animate={inView ? { opacity: 1, translateY: 0 } : undefined}
      whileHover={{ scale: 1.05 }}
      className="rounded-lg border mb-10 last:mb-0 shadow-lg text-gray-700 bg-white"
    >
      <Link
        className="h-96 relative cursor-pointer"
        preventScrollReset
        to={{ pathname: `/p/${slug}` }}
        state={project}
      >
        <motion.img
          loading="lazy"
          src={thumbnail}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 w-full p-4 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <a
              onClick={(e) => e.stopPropagation()}
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-xl lg:text-2xl font-bold tracking-wider text-white backdrop-blur-md backdrop-saturate-100 backdrop-brightness-[0.7] hover:backdrop-brightness-[0.4] px-2 rounded-full transition duration-200 transform hover:scale-105"
            >
              {title}
            </a>
            <a
              onClick={(e) => e.stopPropagation()}
              href={sourceCodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white backdrop-blur-md backdrop-saturate-100 backdrop-brightness-[0.8] rounded-full flex justify-center items-center min-w-[32px] transition duration-200 transform hover:rotate-180"
            >
              <Github fill="white" height={24} />
            </a>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </div>
    </motion.div>
  );
};

export default Project;
