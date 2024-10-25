import { twMerge } from "tailwind-merge";
import Section from "~/components/Section/Section";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Zack Waugaman",
    highlighted: true,
    avatar: "https://picsum.photos/100/100",
    designation: "Co-Founder & CEO @ FullFrame",
    comment:
      "Malik has been very helpful and did a great job designing the complete branding for my website. He's very professional and made revisions to his designs until I was completely satisfied. Highly recommended!",
  },
  {
    id: 2,
    name: "Wyatt Eliot",
    avatar: "https://picsum.photos/100/101",
    designation: "Co-Founder & CEO @ FullFrame",
    comment: "Great Technical Skills",
  },
  {
    id: 3,
    name: "Liam Hart",
    avatar: "https://picsum.photos/100/102",
    designation: "Product Manager @ Wave",
    comment:
      "Excellent attention to detail! Malik transformed our initial ideas into an amazing final product.",
  },
  {
    id: 4,
    name: "Sophia Martin",
    avatar: "https://picsum.photos/100/103",
    designation: "Marketing Lead @ Linkify",
    comment:
      "Malik's designs brought our brand to life! He's creative, responsive, and a pleasure to work with.",
  },
  {
    id: 5,
    name: "Ava Robinson",
    avatar: "https://picsum.photos/100/104",
    designation: "Creative Director @ Visualize",
    comment:
      "Amazing to work with! Malik exceeded our expectations with a modern, sleek design.",
  },
  {
    id: 6,
    name: "Ethan Brooks",
    avatar: "https://picsum.photos/100/105",
    designation: "Software Engineer @ Byte Inc.",
    comment:
      "Malik's UI/UX skills are top-notch. His insights greatly improved our app's user experience.",
  },
  {
    id: 7,
    name: "Mia Johnson",
    avatar: "https://picsum.photos/100/106",
    designation: "HR Specialist @ Fintrack",
    comment:
      "He handled our project with professionalism and delivered a fantastic design for our internal tools.",
  },
  {
    id: 8,
    name: "Noah Wilson",
    avatar: "https://picsum.photos/100/107",
    designation: "CEO @ CodeWay",
    comment:
      "Malik delivered beyond our expectations, creating a unique brand identity that resonated with our target audience.",
  },
  {
    id: 9,
    name: "Emma Lopez",
    avatar: "https://picsum.photos/100/108",
    designation: "Designer @ Brandify",
    comment:
      "Working with Malik has been a pleasure! His vision and creativity have truly enhanced our brand.",
  },
  {
    id: 10,
    name: "Oliver Martinez",
    avatar: "https://picsum.photos/100/109",
    designation: "Business Analyst @ Apex",
    comment:
      "Malik has a great eye for detail and delivered exactly what we needed for our project.",
  },
  {
    id: 11,
    name: "Avery Clark",
    avatar: "https://picsum.photos/100/110",
    designation: "CTO @ GridWorks",
    comment:
      "Impressive work! Malik’s contributions improved both the aesthetics and functionality of our site.",
  },
  {
    id: 12,
    name: "Lucas Reed",
    avatar: "https://picsum.photos/100/111",
    designation: "Frontend Developer @ InnoSoft",
    comment:
      "A true professional with an eye for user-centric designs. Malik’s work is outstanding!",
  },
  {
    id: 13,
    name: "Harper Bailey",
    avatar: "https://picsum.photos/100/112",
    designation: "CFO @ GoGreen",
    comment:
      "Malik understood our brand and target audience perfectly. Our new site has received fantastic feedback!",
  },
  {
    id: 14,
    name: "Evelyn King",
    avatar: "https://picsum.photos/100/113",
    designation: "Head of Design @ TrendUp",
    comment:
      "Creative, innovative, and responsive! Malik nailed every aspect of our project.",
  },
  {
    id: 15,
    name: "Mason Scott",
    avatar: "https://picsum.photos/100/114",
    designation: "Product Designer @ BlueOcean",
    comment:
      "Malik's work added real value to our product, with designs that are as functional as they are beautiful.",
  },
  {
    id: 16,
    name: "Isabella Torres",
    avatar: "https://picsum.photos/100/115",
    designation: "Social Media Manager @ StyleHub",
    comment:
      "Malik's design perfectly captured our brand voice! He's patient and responsive, a true professional.",
  },
  {
    id: 17,
    name: "James Lewis",
    avatar: "https://picsum.photos/100/116",
    designation: "Operations Manager @ TaskFlow",
    comment:
      "Malik's designs are visually stunning and user-friendly. Highly recommend for any design work!",
  },
];

const Testimonials = () => {
  return (
    <Section
      className="bg-gray-50"
      id="testimonials"
      title="Testimonials"
      subtitle="Hear from our clients about their experiences and success stories."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {TESTIMONIALS.map((testimonial) => {
          return (
            <div
              style={{
                boxShadow:
                  "0 8px 16px 0 rgba(0, 0, 0, .05), 0 16px 34px 0 rgba(0, 0, 0, .1)",
              }}
              className={twMerge(
                "rounded-xl border px-6 py-8 flex flex-col justify-between text-gray-500",
                testimonial.highlighted &&
                  "bg-gradient-to-r from-teal-500 to-blue-500 text-gray-50"
              )}
              key={testimonial.id}
              id={`testimonials-${testimonial.id}`}
            >
              <blockquote className="text-lg text-balance text-center leading-relaxed">
                {'"'}
                {testimonial.comment}
                {'"'}
              </blockquote>
              <footer className="flex items-center gap-4 justify-center mt-8">
                <img
                  className="rounded-full flex-shrink-0 flex-grow-0"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  height={40}
                  width={40}
                />
                <div>
                  <h6
                    className={twMerge(
                      "text-gray-800 font-bold",
                      testimonial.highlighted && "text-white"
                    )}
                  >
                    {testimonial.name}
                  </h6>
                  <p>{testimonial.designation}</p>
                </div>
              </footer>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Testimonials;
