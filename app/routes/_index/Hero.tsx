import { Link } from "@remix-run/react";
import Button from "~/components/Button";

const Hero = () => {
  return (
    <section className="border-b border-gray-200 bg-gray-50 content">
      <div className="container">
        <div className="flex justify-between min-h-[calc(70vh)] pt-20">
          <div className="flex flex-col gap-4">
            <h3 className="flex text-2xl gap-2 text-gray-500">
              <span> Hi there, I&apos;m Malik</span>
              <img
                src="/icons/waving-hand.svg"
                alt="waving-hand"
                className="w-6"
              />
            </h3>
            <h1 className="text-4xl font-bold text-gray-800">
              Fullstack Engineer (ex-CTO)
            </h1>
            <h4 className="text-balance text-2xl text-gray-500">
              I help people and brands reach their business goals by designing &
              building customer-centric software products and interactive
              experiences
            </h4>
            <div className="flex gap-8 items-center">
              <Button>View my work</Button>
              <Link
                className="text-lg font-semibold text-teal-500"
                to={"#skills"}
              >
                More about me
              </Link>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/300/500" alt="" />
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center py-20 gap-10 text-center px-10">
        <div className="uppercase font-semibold text-sm text-gray-500 tracking-widest">
          At agency side, client side or as freelancer
        </div>
      </div> */}
      </div>
    </section>
  );
};

export default Hero;
