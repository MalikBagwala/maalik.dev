import type { MetaFunction } from "@remix-run/node";
import Testimonial from "~/components/Testimonial/Testimonial";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Testimonial
        content="This tip is life changing to me!!"
        author={{
          name: "Zouhir ⚡",
          title: "Edge Microsoft | Google Dev Expert",
          avatar: "https://getavatar.vercel.app/twitter/_zouhir",
          link: "https://zouhir.org/",
        }}
        link="https://twitter.com/_zouhir/status/972213169891426305"
      />
    </div>
  );
}
