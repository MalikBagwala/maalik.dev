import React from "react";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.css";

interface TestimonialProps {
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
    link: string;
  };
  isFeatured?: boolean;
  link?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  content,
  author,
  isFeatured = false,
  link,
}) => {
  const blockquoteClasses = twMerge(
    "max-w-2xl rounded-lg m-7 p-8 text-left shadow-md transition-all duration-400 relative",
    isFeatured ? "bg-yellow-300" : "bg-white",
    styles.testimonial
  );

  const renderStars = () => {
    if (!isFeatured) return null;
    return (
      <div className="flex mb-4">
        {[...Array(4)].map((_, index) => (
          <svg
            key={index}
            className="w-6 h-6 mr-1 text-yellow-500"
            viewBox="0 0 27 27"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.222 13.111c0-2.28-2.28-3.99-4.56-3.99-2.85 0-4.56-2.28-4.56-4.56C16.531 2.28 15.391 0 13.111 0 10.83 0 9.12 2.28 9.12 4.56c0 2.85-2.28 4.56-4.56 4.56S0 10.83 0 13.112c0 2.28 2.28 3.99 4.56 3.99 2.85 0 4.56 2.28 4.56 4.56 0 2.281 1.71 4.561 3.991 4.561 2.28 0 3.99-2.28 3.99-4.56s2.28-4.56 4.56-4.56c2.281-.57 4.561-1.71 4.561-3.99z"
              fill="currentColor"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <blockquote className={blockquoteClasses}>
      {renderStars()}
      <p className="text-base text-gray-800 mb-4">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            {content}
          </a>
        ) : (
          content
        )}
      </p>
      <cite className="flex items-center">
        <img
          src={author.avatar}
          alt={author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <a
          href={author.link}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-sm"
        >
          <span className="font-bold block">{author.name}</span>
          <small className="text-gray-600">{author.title}</small>
        </a>
      </cite>
    </blockquote>
  );
};

export default Testimonial;
