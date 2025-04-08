import { getProjects } from "../../sanity/queries.js";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      {projects.map((project) => (
        <div key={project._id}>
          <p>{project.title}</p>
         
        </div>
      ))}
    </>
  );
}
