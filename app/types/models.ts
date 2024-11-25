import { EntryFieldTypes } from "contentful";

export type SkillsSkeleton = {
  contentTypeId: "skills";
  fields: {
    name: EntryFieldTypes.Text;
  };
};

export type ProjectSkeleton = {
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
    body: EntryFieldTypes.RichText;
  };
};

export type TestimonialSkeleton = {
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

export type BrandSkeleton = {
  contentTypeId: "brands";
  fields: {
    weight: EntryFieldTypes.Number;
    name: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
    logo: EntryFieldTypes.AssetLink;
    isEmployer: EntryFieldTypes.Boolean;
  };
};
