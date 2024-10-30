import Section from "~/components/Section/Section";
import Testimonial from "~/components/Testimonial/Testimonial";
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
    highlighted: true,
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
    highlighted: true,

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
    highlighted: true,

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
    highlighted: true,

    name: "Avery Clark",
    avatar: "https://picsum.photos/100/110",
    designation: "CTO @ GridWorks",
    comment:
      "Impressive work! Malik’s contributions improved both the aesthetics and functionality of our site.",
  },
  {
    id: 12,
    highlighted: true,

    name: "Lucas Reed",
    avatar: "https://picsum.photos/100/111",
    designation: "Frontend Developer @ InnoSoft",
    comment:
      "A true professional with an eye for user-centric designs. Malik’s work is outstanding!",
  },
  {
    id: 13,
    highlighted: true,

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
      containerClassName="p-0 overflow-x-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-10 gap-x-12 px-6 py-4 lg:px-4">
        {TESTIMONIALS.map((testimonial, index) => {
          return (
            <Testimonial
              testimonial={testimonial}
              index={index}
              key={testimonial.id}
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Testimonials;
