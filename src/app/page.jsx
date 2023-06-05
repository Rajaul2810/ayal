import Header from '@/app/Components/Header'
import Services from './services/page'
import WhyUs from './whyUs/page'
import Contact from './contact/page'
import Counter from '@/app/Components/Counter'

export default function Home() {
  return (
    <>
    <Header />
    <Services />
    <WhyUs />
    <Counter />
    <Contact />
    </>
  )
}
