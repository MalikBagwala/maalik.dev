/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { EntryFieldTypes } from "contentful";
import { contentfulClient } from "~/services/contentful";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects, { ProjectsType } from "./Projects";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
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

type SkillsSkeleton = {
  contentTypeId: "skills";
  fields: {
    name: EntryFieldTypes.Text;
  };
};
type ProjectSkeleton = {
  contentTypeId: "projects";
  fields: {
    weight: EntryFieldTypes.Number;
    isFeatured: EntryFieldTypes.Boolean;
    title: EntryFieldTypes.Text;
    live: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    source: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    thumbnail: EntryFieldTypes.AssetLink;
    stack: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<SkillsSkeleton>>;
  };
};
export async function loader() {
  const response = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: "projects",
    order: ["-fields.weight", "fields.isFeatured"],
  });

  const projects: ProjectsType & { total: number } = {
    projects: response.items.map(({ fields }) => {
      return {
        title: fields.title,
        technologies: fields.stack.map((stack) => (stack as any).fields.name),
        liveLink: fields.live,
        sourceCodeLink: fields.source,
        slug: fields.slug,
        description: fields.description,
        thumbnail: (fields.thumbnail as any)?.fields?.file?.url,
      };
    }),
    total: response.total,
  };
  return {
    projects,
    
  };
}
export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <>
      <Hero />
      <Projects {...projects} />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
