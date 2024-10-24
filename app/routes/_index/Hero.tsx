import { Link } from "@remix-run/react";
import Button from "~/components/Button";

const Hero = () => {
  return (
    <section className="py-10 container">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <h3 className="flex text-2xl gap-2 text-gray-500">
            <span> Hi there, I&apos;m Malik</span>
            <img
              src="/icons/waving-hand.svg"
              alt="waving-hand"
              className="w-6"
            />
          </h3>
          <h1 className="text-4xl font-bold">Fullstack Engineer (ex-CTO)</h1>
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
    </section>
  );
};

export default Hero;
