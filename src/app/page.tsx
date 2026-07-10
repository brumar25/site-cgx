import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Features from '@/components/sections/Features'
import Services from '@/components/sections/Services'
import Quote from '@/components/sections/Quote'
import Contact from '@/components/sections/Contact'
import DotNav from '@/components/ui/DotNav'

export default function Home() {
  return (
    <>
      <DotNav />
      <Hero />
      <About />
      <Features />
      <Services />
      <Quote />
      <Contact />
    </>
  )
}
