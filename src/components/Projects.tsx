
import { Badge } from '@mantine/core'
import {
  IconBuildingBank,
  IconUsers,
  IconStar,
  IconHome,
} from '@tabler/icons-react'
import { projects } from '../data/portfolioData'

const iconMap: Record<string, React.ReactNode> = {
  bank: <IconBuildingBank size={64} className="text-white/80" />,
  users: <IconUsers size={64} className="text-white/80" />,
  star: <IconStar size={64} className="text-white/80" />,
  home: <IconHome size={64} className="text-white/80" />,
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 hover:scale-[1.02] transition duration-300 group"
            >
              {/* Project Banner */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <div className="group-hover:scale-110 transition duration-300">
                  {iconMap[project.icon]}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="light"
                      color="blue"
                      size="sm"
                      radius="sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
