/* eslint-disable @typescript-eslint/no-explicit-any */
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { twMerge } from "tailwind-merge";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects, { ProjectsType } from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials, { TestimonialsType } from "./components/Testimonials";
import { contentfulClient } from "./services/contentful";
import "./tailwind.css";
import { ProjectSkeleton, TestimonialSkeleton } from "./types/models";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
  },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Malik Bagwala | Freelance Software Engineer" },
    {
      name: "description",
      content:
        "I help people and brands reach their business goals by designing & building customer-centric software products and interactive experiences",
    },
  ];
};

export async function loader() {
  const response = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: "projects",
    order: ["-fields.weight", "fields.isFeatured"],
    select: [
      "fields.title",
      "fields.isFeatured",
      "fields.slug",
      "fields.live",
      "fields.source",
      "fields.thumbnail",
      "fields.description",
    ],
  });
  const tResponse = await contentfulClient.getEntries<TestimonialSkeleton>({
    content_type: "testimonials",
    order: ["-fields.weight", "fields.isHighlighted"],
  });
  const projects: ProjectsType & { total: number } = {
    projects: response.items.map(({ fields }) => {
      return {
        title: fields.title,
        technologies: [],
        liveLink: fields.live,
        sourceCodeLink: fields.source,
        slug: fields.slug,
        description: fields.description,
        thumbnail: (fields.thumbnail as any)?.fields?.file?.url,
        isFeatured: fields.isFeatured,
      };
    }),
    total: response.total,
  };

  const testimonials: TestimonialsType = {
    testimonials: tResponse.items.map((item) => {
      return {
        id: item.sys.id,
        avatar: (item.fields.clientAvatar as any)?.fields?.file?.url,
        comment: documentToHtmlString(item.fields.content),
        designation: item.fields.clientDesignation,
        name: item.fields.clientName,
      };
    }),
    total: tResponse.total,
  };
  return {
    projects,
    testimonials,
  };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { projects, testimonials } = useLoaderData<typeof loader>();
  const LINKS = [
    {
      to: "#projects",
      name: "Projects",
      render: projects.total ? true : false,
    },
    { to: "#skills", name: "Skills" },
    {
      to: "#testimonials",
      name: "Testimonials",
      render: testimonials.total ? true : false,
    },
    { to: "#contact", name: "Contact" },
    { to: "#why-me", name: "Why Me?", render: false },
  ].filter((l) => l.render !== false);

  return (
    <html lang="en" data-theme="light">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="d48f5ced-0865-421a-abb7-9856adb60d41"
        ></script>
      </head>
      <body
        className={twMerge(
          "min-h-screen bg-white text-gray-700 overflow-x-hidden"
        )}
      >
        <Navbar links={LINKS} />
        <main>
          <Hero />
          <Projects {...projects} />
          <Skills />
          <Testimonials {...testimonials} />
          <Contact />
          <Footer />
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
