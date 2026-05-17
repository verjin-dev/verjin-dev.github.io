import Navbar from "@/components/Navbar"
import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Journey from "@/sections/Journey"
import Skills from "@/sections/Skills"
import Projects from "@/sections/Projects"
import Certificates from "@/sections/Certificates"
import Contact from "@/sections/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-16">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}
