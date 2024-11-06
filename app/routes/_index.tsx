/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { EntryFieldTypes } from "contentful";
import Contact from "~/components/Contact/Contact";
import Hero from "~/components/Hero/Hero";
import { contentfulClient } from "~/services/contentful";
import Footer from "../components/Footer";
import Projects, { ProjectsType } from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials, { TestimonialsType } from "../components/Testimonials";
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
type TestimonialSkeleton = {
  contentTypeId: "testimonials";
  fields: {
    weight: EntryFieldTypes.Number;
    isHighlighted: EntryFieldTypes.Boolean;
    clientAvatar: EntryFieldTypes.AssetLink;
    clientName: EntryFieldTypes.Text;
    clientDesignation: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
  };
};
export async function loader() {
  const response = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: "projects",
    order: ["-fields.weight", "fields.isFeatured"],
  });
  const tResponse = await contentfulClient.getEntries<TestimonialSkeleton>({
    content_type: "testimonials",
    order: ["-fields.weight", "fields.isHighlighted"],
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

export default function Index() {
  const { projects, testimonials } = useLoaderData<typeof loader>();
  return (
    <>
      <Hero />
      <Projects {...projects} />
      <Skills />
      <Testimonials {...testimonials} />
      <Contact />
      <Footer />
    </>
  );
}
