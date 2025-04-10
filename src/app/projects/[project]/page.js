import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getProject } from "../../../../sanity/queries.js";

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div>
      <h1>{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={1920}
        height={1080}
      />
      <PortableText value={project.description} />
    </div>
  );
}
