
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconPhone, IconMapPin } from '@tabler/icons-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#1e293b]/50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left - Bio */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">
            About Me
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            I am a passionate Senior Software Developer with extensive experience
            in Full Stack development. Currently working with the{' '}
            <strong className="text-white">
              Central Information Commission (CIC) Delhi, India
            </strong>
            , I lead the development of scalable applications using modern
            technologies.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            My expertise lies in bridging the gap between robust backend logic
            with <strong className="text-white">Laravel</strong> and dynamic,
            responsive frontend interfaces with{' '}
            <strong className="text-white">React.js & TypeScript</strong>. I hold
            a Master's in Computer Application (MCA) with a{' '}
            <strong className="text-white">9.5 CGPA</strong>.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">

            <a
              href="https://www.linkedin.com/in/jyoti-kumari-29091419a"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <IconBrandLinkedin size={28} />
            </a>
            <a
              href="https://github.com/jyoyi02"
              target="_blank"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <IconBrandGithub size={28} />
            </a>
            <a
              href="mailto:jyotikumari@email.com"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <IconMail size={28} />
            </a>
          </div>
        </div >

        {/* Right - Education & Contact Card */}
        < div className="bg-[#0f172a] p-8 rounded-xl border border-slate-700 shadow-xl" >

          {/* Education */}
          < h3 className="text-xl font-bold text-white mb-4" > Education</h3 >
          <div className="mb-4">
            <h4 className="text-blue-500 font-semibold">
              Master Of Computer Application
            </h4>
            <p className="text-white">
              Lakshmi Narain College of Technology, Bhopal, MP
            </p>
            <p className="text-sm text-gray-500">
              June 2020 - August 2022 | 9.5 CGPA
            </p>
          </div>

          {/* Contact */}
          <div className="pt-4 border-t border-slate-700">
            <h3 className="text-xl font-bold text-white mb-3">Contact</h3>
            <p className="text-gray-400 flex items-center gap-2 mb-2">
              <IconPhone size={18} className="text-blue-500" />
              +91 **********
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <IconMail size={18} className="text-blue-500" />
              jyotikumari070297@gmail.com
            </p>
            <p className="text-gray-400 flex items-center gap-2">
              <IconMapPin size={18} className="text-blue-500" />
              Noida Sector 44, India
            </p>
          </div>
        </div >

      </div >
    </section >
  )
}
