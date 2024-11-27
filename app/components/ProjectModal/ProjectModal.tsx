import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "../Projects";
import Github from "~/icons/Github";

type SpringModalType = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
};

const SpringModal = ({ isOpen, onClose, project }: SpringModalType) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return function cleanup() {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollableDiv = e.currentTarget;
    const currentScrollY = scrollableDiv.scrollTop;
    const currentTime = Date.now();

    // Calculate velocity (pixels per millisecond)
    const timeDelta = currentTime - lastScrollTime.current;
    const scrollDelta = lastScrollY.current - currentScrollY;
    const velocity = scrollDelta / timeDelta;

    // If we're at the top and scrolling up with enough velocity, close the modal
    if (currentScrollY <= 0 && velocity > 0.7) {
      onClose();
    }

    lastScrollY.current = currentScrollY;
    lastScrollTime.current = currentTime;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "none" }}
          animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="p-8 fixed inset-0 z-50 cursor-pointer overflow-hidden"
        >
          <motion.div
            ref={scrollRef}
            onScroll={handleScroll}
            initial={{
              opacity: 0,
              translateX: "-50%",
              translateY: "100%",
            }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "100%" }}
            transition={{ duration: 0.37 }}
            onClick={(e) => e.stopPropagation()}
            className={twMerge(
              "absolute top-12 lg:top-24 bottom-0 left-1/2 h-[calc(100dvh-3rem)] lg:h-[calc(100dvh-7rem)] overflow-y-auto",
              "w-full max-w-full lg:max-w-4xl",
              "bg-white text-neutral-600 border-t lg:border border-neutral-300 p-6 rounded-t-lg lg:rounded-b-lg shadow-xl cursor-default"
            )}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center border rounded-full text-neutral-600 hover:bg-neutral-100"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Modal Content */}
            <header className="flex gap-6">
              <img
                src={project.thumbnail}
                className="rounded-md h-20 w-20 object-cover object-center"
                alt=""
              />
              <div className="flex flex-col gap-y-2">
                <h1 className="font-bold text-lg text-neutral-800">
                  {project.title}
                </h1>
                <p>{project.description}</p>
              </div>
            </header>
            <hr className="my-4" />
            <div className="flex flex-col">
              <p className="text-xs uppercase mb-2">TECH</p>
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-md border text-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: project.body || "" }}
              className="prose mt-6"
            ></div>
            {(project.liveLink || project.sourceCodeLink) && (
              <footer className="mt-4 flex gap-4">
                {project.liveLink && (
                  <motion.a
                    whileHover={{
                      translateY: -2,
                    }}
                    target="__blank"
                    href={project.liveLink}
                    className="px-4 py-2 rounded-md border text-blue-600 text-lg w-fit"
                  >
                    Visit
                  </motion.a>
                )}
                {project.sourceCodeLink && (
                  <motion.a
                    whileHover={{
                      translateY: -2,
                    }}
                    target="__blank"
                    href={project.sourceCodeLink}
                    className="px-4 py-2 rounded-md border text-blue-600 text-lg flex items-center gap-1 w-fit"
                  >
                    <Github fill="currentColor" height={24} />{" "}
                    <span>Source Code</span>
                  </motion.a>
                )}
              </footer>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
