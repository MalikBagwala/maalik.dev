import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen w-full bg-gray-100 text-teal-900 font-bold pt-[calc(63px+2rem)]">
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
    </div>
  );
}
