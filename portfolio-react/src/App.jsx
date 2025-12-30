import Navbar from "./components/Navbar"

import Hero from "./sections/Hero"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Projects from "./sections/Projects"
import Certificates from "./sections/Certificates"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
