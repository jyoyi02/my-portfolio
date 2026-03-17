
import { Timeline, Text } from '@mantine/core'
import { IconBriefcase } from '@tabler/icons-react'
import { experiences } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#1e293b]/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Work Experience
        </h2>

        <Timeline
          color="blue"
          active={experiences.length}
          bulletSize={32}
          lineWidth={2}
        >
          {experiences.map((job, i) => (
            <Timeline.Item
              key={i}
              bullet={<IconBriefcase size={16} />}
              title={
                <span className="text-white font-bold text-lg">{job.title}</span>
              }
            >
              <Text size="sm" c="blue" fw={500} mb={2}>
                {job.period}
              </Text>
              <Text c="dimmed" size="sm" mb="sm">
                {job.company}
              </Text>
              <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </Timeline.Item>
          ))}
        </Timeline>

      </div>
    </section>
  )
}
