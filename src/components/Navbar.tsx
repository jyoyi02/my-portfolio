
import { useState } from 'react'
import { Burger, Drawer } from '@mantine/core'
import { navLinks } from '../data/portfolioData'

export default function Navbar() {
  const [opened, setOpened] = useState(false)

  return (
    <nav className="fixed w-full bg-[#0f172a]/90 backdrop-blur-sm z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          JK<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="capitalize text-gray-300 hover:text-blue-500 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hire Me Button - Desktop */}
        <a
          href="mailto:jyotikumari@email.com"
          className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Hire Me
        </a>

        {/* Mobile Burger */}
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          color="white"
          className="md:hidden"
        />
      </div >

      {/* Mobile Drawer */}
      < Drawer
        opened={opened}
        onClose={() => setOpened(false)
        }
        title={< span className="text-white font-bold text-xl" > JK < span className="text-blue-500" >.</span ></span >}
        styles={{
          content: { backgroundColor: '#0f172a' },
          header: { backgroundColor: '#0f172a' },
        }}
      >
        <div className="flex flex-col space-y-6 mt-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpened(false)}
              className="capitalize text-gray-300 hover:text-blue-500 text-lg transition"
            >
              {link}
            </a>
          ))}
          <a
            href="mailto:jyotikumari@email.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition text-center"
          >
            Hire Me
          </a >
        </div >
      </Drawer >
    </nav >
  )
}
