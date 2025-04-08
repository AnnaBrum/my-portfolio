import { getProjects } from "../../sanity/sanity-utils.js";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects)
  return 
    <div>

    </div>
  
}
