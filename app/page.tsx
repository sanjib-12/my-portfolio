import About from '@/components/about'
import Intro from '@/components/intro'
import SectionDivider from '@/components/section-divider'
import Project from "@/components/projects"
import Skills from '@/components/skill'
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Project/>
      <Skills/>
    </main>
  )
}
