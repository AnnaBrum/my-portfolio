import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "ahz9dym1", //Remeber that you can find it in your sanity.config file
    dataset: "production",
    apiVersion: "2025-04-17",
  });

  return client
    .fetch

    //Write your groq query here
    ();
}
