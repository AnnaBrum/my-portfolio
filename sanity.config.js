import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { schemaTypes } from "./sanity/schemaTypes"
import { visionTool } from "@sanity/vision";

export default defineConfig({
  name: "default",
  title: "My Portfolio",
  basePath: "/studio",
  projectId: "ahz9dym1", // Replace with your actual Sanity project ID
  dataset: "production",

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
