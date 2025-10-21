import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Education } from '@/components/education'
import { Contact } from '@/components/contact'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#240046] via-[#3C096C] via-30% via-[#1a0033] via-60% to-[#0a0014] to-100%" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(167,51,255,0.15),transparent_50%)]" />
      </div>

      <div className="relative">
        <Hero />
      </div>
      <div className="relative">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  )
}
