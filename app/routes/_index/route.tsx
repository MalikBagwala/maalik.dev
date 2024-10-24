import type { MetaFunction } from "@remix-run/node";
import Hero from "./Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const TestSection = () => {
  return (
    <div className="container grid grid-cols-3 gap-8">
      <img src="https://picsum.photos/600/600" alt="" />
      <img src="https://picsum.photos/600/601" alt="" />
      <img src="https://picsum.photos/600/602" alt="" />
      <img src="https://picsum.photos/600/604" alt="" />
      <img src="https://picsum.photos/600/606" alt="" />
      <img src="https://picsum.photos/600/609" alt="" />
      <img src="https://picsum.photos/600/610" alt="" />
      <img src="https://picsum.photos/600/611" alt="" />
      <img src="https://picsum.photos/600/612" alt="" />
      <img src="https://picsum.photos/600/613" alt="" />
    </div>
  );
};
export default function Index() {
  return (
    <div>
      <Hero />
      {/* <TestSection /> */}
    </div>
  );
}
