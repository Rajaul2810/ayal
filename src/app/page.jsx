import Header from '@/app/Components/Header'
import Services from './services/page'
import WhyUs from './whyUs/page'
import Contact from './contact/page'
import Counter from '@/app/Components/Counter'
import About from './about/page'

export default function Home() {
  return (
    <>
    <Header />
    <Services />
    <WhyUs />
    <Counter />
    <About/>
    <Contact />
    </>
  )
}
