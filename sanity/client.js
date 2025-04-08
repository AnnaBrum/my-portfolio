import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "ahz9dym1",
  dataset: "production",
  apiVersion: "2025-04-17", // Add todays date
  useCdn: false,
});
