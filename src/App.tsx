import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Chatbot from './components/chatbot'

export default function App() {
  return (
    <div className="bg-[#0f172a] text-gray-300 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <Chatbot />
    </div>
  )
}