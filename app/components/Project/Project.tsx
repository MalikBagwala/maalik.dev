import { Link } from "@remix-run/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ArrowRight from "~/icons/ArrowRight";

type ProjectProps = {
  title: string;
  description: string;
  thumbnail: string;
  liveLink: string;
  sourceCodeLink: string;
  technologies: string[];
  slug: string;
  isFeatured: boolean;
};

const Project = (project: ProjectProps) => {
  const { title, description, thumbnail, slug, isFeatured } = project;
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 100 }}
      animate={inView ? { opacity: 1, translateY: 0 } : undefined}
      className="relative rounded-lg border dark:border-neutral-700 mb-10 last:mb-0 shadow-lg text-neutral-700 bg-white dark:bg-neutral-900 overflow-hidden"
    >
      {/* Featured Tag */}
      {isFeatured && (
        <div className="z-[1] absolute top-0 right-0 bg-gradient-to-r from-yellow-500 to-orange-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-bl shadow-lg">
          Professional
        </div>
      )}

      <div className="relative group">
        <Link
          className="h-96 cursor-pointer overflow-hidden relative"
          preventScrollReset
          to={{ pathname: `/p/${slug}` }}
          state={project}
        >
          <div className="w-full h-full overflow-hidden rounded-t-lg relative">
            <motion.img
              whileHover={{ scale: 1.15 }}
              loading="lazy"
              src={thumbnail}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-300"
            />
            <div
              style={{
                backdropFilter: "saturate(180%) blur(10px)",
                background: "rgba(22, 22, 23, .6)",
                color: "#fffc",
              }}
              className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <div className="flex items-center gap-1">
                <p className="text-white text-lg">View Project</p>
                <ArrowRight />
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="p-4">
        <p className="text-neutral-800 dark:text-neutral-300 text-xl lg:text-2xl font-bold tracking-wider mb-2">
          {title}
        </p>
        <article
          className="prose dark:prose-invert leading-relaxed text-lg dark:text-neutral-500"
          dangerouslySetInnerHTML={{ __html: description }}
        ></article>
      </div>
    </motion.div>
  );
};

export default Project;
