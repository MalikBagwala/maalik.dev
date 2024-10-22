// Testimonial.tsx
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface TestimonialProps {
  message: string;
  author: string;
  role: string;
  imageSrc: string;
  isFeatured?: boolean;
  link: string;
}

const Testimonial: FC<TestimonialProps> = ({
  message,
  author,
  role,
  imageSrc,
  isFeatured = false,
  link,
}) => {
  const baseStyles =
    "max-w-xl p-8 rounded-lg shadow-md transition-all duration-400 text-gray-700";
  const featuredStyles = "bg-yellow-400";
  const regularStyles = "bg-white";

  return (
    <blockquote
      className={twMerge(
        baseStyles,
        isFeatured ? featuredStyles : regularStyles
      )}
    >
      {isFeatured && (
        <div className="flex space-x-2 mb-4">
          {[...Array(4)].map((_, index) => (
            <svg
              key={index}
              width="27"
              height="27"
              viewBox="0 0 27 27"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
            >
              <path
                d="M26.222 13.111c0-2.28-2.28-3.99-4.56-3.99-2.85 0-4.56-2.28-4.56-4.56C16.531 2.28 15.391 0 13.111 0 10.83 0 9.12 2.28 9.12 4.56c0 2.85-2.28 4.56-4.56 4.56S0 10.83 0 13.112c0 2.28 2.28 3.99 4.56 3.99 2.85 0 4.56 2.28 4.56 4.56 0 2.281 1.71 4.561 3.991 4.561 2.28 0 3.99-2.28 3.99-4.56s2.28-4.56 4.56-4.56c2.281-.57 4.561-1.71 4.561-3.99z"
                fill="currentColor"
              />
            </svg>
          ))}
        </div>
      )}
      <p className="text-lg font-semibold leading-relaxed">{message}</p>
      <cite className="mt-4 flex items-center">
        <img
          src={imageSrc}
          alt={author}
          className="rounded-full w-14 h-14 mr-4"
        />
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium"
        >
          {author}
          <small className="block text-sm text-gray-500">{role}</small>
        </a>
      </cite>
    </blockquote>
  );
};

export default Testimonial;
