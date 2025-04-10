import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { getProject } from "../../../../sanity/queries.js";

export default async function Project({ params }) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        {project.title}
      </h1>

      <div className="mb-10 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={project.image}
          alt={project.title}
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="prose max-w-none prose-lg prose-neutral">
        <PortableText value={project.description} />
      </div>
    </div>
  );
}
