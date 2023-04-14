import './App.css'

import {
  Footer,
  Pricing,
  Possibility,
  About,
  Header,
  Terms,
  Privacy
} from './containers'
import { Navbar } from './components'
import { Routes, Route } from 'react-router-dom'

function Home() {
  return (
    <div className='App'>
      <Navbar />
      <div className='gradient__bg'>
        <Header />
      </div>
      <Possibility />
      <Pricing />
      <Footer />
    </div>
  )
}


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/docs/terms-and-conditions' element={<Terms />}></Route>
      <Route path='/docs/privacy-policy' element={<Privacy/>}></Route>
    </Routes>
    </>
  )
}

export default App
