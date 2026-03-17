
import { IconBrandLinkedin, IconBrandGithub, IconPhone, IconSend } from '@tabler/icons-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-[#1e293b] border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-white mb-4">
          Let's Work Together
        </h2>
        <p className="text-gray-400 mb-6">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <a
          href="mailto:jyotikumari@email.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition mb-8"
        >
          Say Hello <IconSend size={18} />
        </a>

        <div className="flex justify-center space-x-6 text-gray-500 mt-8">
          <a href="https://www.linkedin.com/in/jyoti-kumari-29091419a" target="_blank" className="hover:text-blue-500 transition">
            <IconBrandLinkedin size={28} />
          </a>
          <a href="https://github.com/jyoyi02" target="_blank" className="hover:text-blue-500 transition">
            <IconBrandGithub size={28} />
          </a>
          <a href="tel:+917970560817" className="hover:text-blue-500 transition">
            <IconPhone size={28} />
          </a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          © 2025 Jyoti Kumari. Crafted with Laravel & React Skills.
        </p>

      </div>
    </footer >
  )
}
