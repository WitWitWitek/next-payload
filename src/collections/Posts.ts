import { slateEditor } from "@payloadcms/richtext-slate";
import type { CollectionConfig } from "payload/types";

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
  ],
};
