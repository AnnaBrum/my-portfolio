import { groq } from "next-sanity";
import { client } from "./client.js";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      title,
      "slug": slug.current,
      "image": image.asset->url,
      description,
    }`
  );
}

export async function getProject(slug) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current,
      "image": image.asset->url,
			description,
            skill,
    }`,
    { slug } // we need the slug to create dynamic routes
  );
}
