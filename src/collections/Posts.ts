import { slateEditor } from "@payloadcms/richtext-slate";
import type { CollectionConfig } from "payload/types";
import formatSlug from "./hooks/formatSlug";
import { slugField } from "./hooks/slug";

export const Posts: CollectionConfig = {
  slug: "posts",
  access: {
    read: () => true,
    update: () => true,
    create: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "authors",
      type: "relationship",
      relationTo: "users",
      hasMany: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: slateEditor({}),
    },
    slugField(),
  ],
};
