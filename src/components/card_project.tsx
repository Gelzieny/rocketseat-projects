import type { PageDataProject } from "@/@types/hygraph";
import { TechBadge } from "./tech-badge";

type Project = PageDataProject["projects"][0];

interface CardProjectProps {
  project: Project;
}


export function CardProject({ project }: CardProjectProps) {
  return (
    <div
      className="group bg-gradient-to-br from-purple-500/30 to-blue-500/30 
      dark:from-purple-400/40 dark:to-blue-400/40 rounded-2xl p-0.5 hover:scale-105 transition-all duration-300"
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden h-full transition-colors duration-300"
      >
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <img
            src={project.thumbnail.url}
            alt={project.title}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 
              group-hover:scale-110 transition-all duration-500"
          />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex gap-2">
              {project.technologies.map((tech) => (
                <TechBadge
                  key={tech.name}
                  names={[tech.name]}
                  className="flex items-center gap-2 text-sm py-1 px-3 rounded-lg text-gray-500"
                />
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
