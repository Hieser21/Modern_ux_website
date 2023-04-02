import './App.css'

import {
  Footer,
  Pricing,
  Possibility,
  Features,
  About,
  Header,
} from './containers'
import { CTA, Navbar } from './components'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Features />
      <Possibility />
      <CTA />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
