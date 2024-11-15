/* eslint-disable @typescript-eslint/no-explicit-any */
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Outlet, useLoaderData, useNavigate } from "@remix-run/react";
import SpringModal from "~/components/ProjectModal/ProjectModal";
import { contentfulClient } from "~/services/contentful";
import { ProjectSkeleton } from "~/types/models";
// Custom renderer for rich text
const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const url = node.data.target.fields.file.url;
      const alt = node.data.target.fields.title || "Embedded Image";
      // Determine media type based on file extension or MIME type
      if (
        url.endsWith(".mp4") ||
        url.endsWith(".webm") ||
        url.endsWith(".mov") ||
        url.endsWith(".flv")
      ) {
        return `<video src="${url}" controls class="rich-text-video">${alt}</video>`;
      } else if (url.endsWith(".mp3") || url.endsWith(".wav")) {
        return `<audio src="${url}" controls class="rich-text-audio">${alt}</audio>`;
      } else {
        // Default to image if no other type matches
        return `<img src="${url}" alt="${alt}" class="rich-text-image" />`;
      }
    },
    [INLINES.HYPERLINK]: (node: any) => {
      const url = node.data.uri;
      const content = node.content[0].value;
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${content}</a>`;
    },
  },
};
export async function loader({ params }: { params: { slug: string } }) {
  const projectId = params.slug;
  const response = await contentfulClient.getEntries<ProjectSkeleton>({
    content_type: "projects",
    "fields.slug": projectId,
    limit: 1,
  });

  if (response.items.length === 0) {
    throw new Response("Project Not Found", { status: 404 });
  }

  const project = response.items[0].fields;
  return {
    title: project.title,
    liveLink: project.live,
    sourceCodeLink: project.source,
    slug: project.slug,
    description: project.description,
    thumbnail: (project.thumbnail as any)?.fields?.file?.url,
    technologies: project.stack.map((stack) => (stack as any).fields.name),
    body: documentToHtmlString(project.body, renderOptions),
  };
}

export const meta = ({ data }: any) => {
  if (!data) {
    return {
      title: "Project Not Found - My Portfolio",
      description: "The project you are looking for does not exist.",
    };
  }

  return {
    title: `${data.title} - My Portfolio`,
    description: `Learn more about the project ${
      data.title
    }, built using ${data.technologies.join(
      ", "
    )}. Discover its features, source code, and live demo.`,
    "og:title": `${data.title} - My Portfolio`,
    "og:description": `Explore the details of ${
      data.title
    }, a project utilizing ${data.technologies.join(", ")}.`,
    "og:image": data.thumbnail || "",
    "og:url": `https://yourdomain.com/projects/${data.slug}`,
    "twitter:card": "summary_large_image",
    "twitter:title": `${data.title} - My Portfolio`,
    "twitter:description": `Discover ${
      data.title
    }, developed with ${data.technologies.join(", ")}.`,
    "twitter:image": data.thumbnail || "",
  };
};
export default function ProjectDetail() {
  const navigate = useNavigate();
  const remoteProjectData = useLoaderData<typeof loader>();
  return (
    <>
      <Outlet />
      <SpringModal
        project={remoteProjectData as any}
        isOpen={true}
        onClose={() => navigate("/", { preventScrollReset: true })}
      />
    </>
  );
}
