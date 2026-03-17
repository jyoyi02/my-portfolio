
import { Badge } from '@mantine/core'
import {
  IconApps,
  IconServer,
  IconDatabase,
  IconTools,
} from '@tabler/icons-react'
import { skills } from '../data/portfolioData'

const iconMap: Record<string, React.ReactNode> = {
  laptop: <IconApps size={36} className="text-blue-500" />,
  server: <IconServer size={36} className="text-blue-500" />,
  database: <IconDatabase size={36} className="text-blue-500" />,
  tools: <IconTools size={36} className="text-blue-500" />,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ category, icon, items }) => (
            <div
              key={category}
              className="bg-[#1e293b] p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition duration-300"
            >
              {/* Icon */}
              <div className="mb-4">{iconMap[icon]}</div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-white mb-3">{category}</h3>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="filled"
                    color="dark"
                    radius="xl"
                    size="md"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
