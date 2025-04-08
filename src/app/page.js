import { getProjects } from "../../sanity/queries.js";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((project) => (
        <div key={project._id}>
          <p>{project.title}</p>
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
        </div>
      ))}
    </>
  );
}
