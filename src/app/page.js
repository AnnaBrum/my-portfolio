import { getProjects } from "../../sanity/queries.js"
import Image from "next/image"
import Link from "next/link"
import { PortableText } from "@portabletext/react";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((project) => (
        <div key={project._id}>
          <p>{project.title}</p>
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
            />
          </Link>
        </div>
      ))}
    </>
  );
}
