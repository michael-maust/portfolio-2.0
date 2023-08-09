import { Meta } from '@/components/Layout'
import { Main } from '@/components/Layout/Main'
import WelcomeSection from '@/components/sections/WelcomeSection'
import Image from 'next/image'
import { useIntersectionObserver } from '@react-hookz/web';
import { PAGE_ANCHORS } from '@/components/Layout/Header';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <Main
      meta={
        <Meta
          title="Michael Maust's Portfolio"
          description=""
        />
      }
    >
      <WelcomeSection />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Main>
  )
}
