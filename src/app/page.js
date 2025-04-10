import { getProjects } from "../../sanity/queries.js";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
        My Portfolio
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
        I am a super cool developer, please hire me! Take a look at my projects
        below:
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project._id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-60"
              />
            </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
