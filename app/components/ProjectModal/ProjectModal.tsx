import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectType } from "../Projects";

type SpringModalType = {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectType;
};

const SpringModal = ({ isOpen, onClose, project }: SpringModalType) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return function cleanup() {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="backdrop-blur p-8 fixed inset-0 z-50 cursor-pointer overflow-hidden"
        >
          <motion.div
            initial={{
              opacity: 0,
              translateX: "-50%",
              translateY: "100%",
            }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: "100%" }}
            transition={{ duration: 0.34 }}
            onClick={(e) => e.stopPropagation()}
            drag="y"
            dragConstraints={{ top: 0, bottom: 100 }}
            dragElastic={0.2}
            onDragEnd={(e, { offset, velocity }) => {
              // Close if the drag is fast or dragged down far enough
              if (offset.y > 100 || velocity.y > 500) onClose();
            }}
            className={twMerge(
              "absolute top-12 lg:top-24 bottom-0 left-1/2 h-[calc(100dvh-3rem)] lg:h-[calc(100dvh-7rem)] overflow-y-auto",
              "w-full max-w-full lg:max-w-4xl",
              "bg-white text-gray-600 border-t lg:border border-gray-300 p-6 rounded-t-lg lg:rounded-b-lg shadow-xl cursor-default"
            )}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center border rounded-full text-gray-600 hover:bg-gray-100"
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
                <h1 className="font-bold text-lg text-gray-800">
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
                    className="px-4 py-2 rounded-md border text-gray-800"
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
            <footer></footer>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SpringModal;
