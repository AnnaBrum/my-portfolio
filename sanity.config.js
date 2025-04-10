import { defineConfig } from "sanity"
import { structureTool} from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"
import { visionTool } from "@sanity/vision";
import { structure } from "./structure";

export default defineConfig({
  name: "default",
  title: "My Portfolio",
  basePath: "/studio",
  projectId: "ahz9dym1", // Replace with your actual Sanity project ID
  dataset: "production",

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
