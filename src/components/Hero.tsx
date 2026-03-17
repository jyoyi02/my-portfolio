
import { Button } from '@mantine/core'
import { IconBrandGithub, IconEye } from '@tabler/icons-react'

export default function Hero() {
  return (
    <header
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#0f172a]"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="text-center z-10 px-6">
        <p className="text-blue-500 font-medium mb-4 tracking-widest uppercase">
          Senior Software Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Hi, I'm <span className="text-blue-500">Jyoti Kumari</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mb-8">
          A Full Stack Developer specializing in{' '}
          <strong className="text-white">Laravel</strong> and{' '}
          <strong className="text-white">React.js</strong>. I build secure,
          scalable web applications and complex dashboards.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            component="a"
            href="#projects"
            color="blue"
            size="md"
            leftSection={<IconEye size={18} />}
            className="shadow-lg shadow-blue-500/20"
          >
            View Projects
          </Button>
          <Button
            component="a"
            href="https://github.com/jyoyi02"
            target="_blank"
            variant="outline"
            color="gray"
            size="md"
            leftSection={<IconBrandGithub size={18} />}
          >
            GitHub
          </Button>
        </div>
      </div>
    </header>
  )
}