import Header from '@/app/Components/Header'
import Services from './services/page'
import Contact from './contact/page'
import Counter from '@/app/Components/Counter'
import About from './about/page'
import ChooseUs from './Components/ChooseUs'

export default function Home() {
  return (
    <>
    <Header />
    <Services />
    <ChooseUs/>
    <Counter />
    <About/>
    <Contact />
    </>
  )
}
