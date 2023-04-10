import './App.css'

import {
  Footer,
  Pricing,
  Possibility,
  About,
  Header,
} from './containers'
import { CTA, Navbar } from './components'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='gradient__bg'>
        <Header />
      </div>
      <About />
      <Possibility />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
