import Section from "~/components/Section/Section";
import Testimonial from "~/components/Testimonial/Testimonial";

export type TestimonialType = {
  id: string;
  name: string;
  avatar: string;
  designation: string;
  comment: string;
};

export type TestimonialsType = {
  total: number;
  testimonials: TestimonialType[];
};
const Testimonials = ({ testimonials }: TestimonialsType) => {
  if (!testimonials.length) return null;
  return (
    <Section
      className="bg-gray-50"
      id="testimonials"
      title="Testimonials"
      subtitle="Hear from our clients about their experiences and success stories."
      containerClassName="p-0 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-y-10 gap-x-12 px-6 py-4 lg:px-4">
        {testimonials.map((testimonial, index) => {
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
