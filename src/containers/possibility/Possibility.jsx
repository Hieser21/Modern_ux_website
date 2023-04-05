import React from 'react'
import './possibility.css'
import InstepFeatures from '../features/Instep'
import NoxiaFeatures from '../features/Noxia' 


const Instep = () => {
  return (
    <div id="instep">
    <h1 className='gradient__text text-center'>Instep</h1>
    <InstepFeatures />
    <h1 className='gradient__text2 text-center'>Need a demo? <a href='https://discord.gg/aspect-systems-930476025933070356'>Contact us!</a></h1>
    </div>
  )
}


const Noxia = () => {
  return (
    <div id='noxia'>
       <h1 className='gradient__text text-center'>Noxia</h1>
          <NoxiaFeatures />
          <h1 className='gradient__text2 text-center'>Need more info? <a href='https://discord.gg/aspect-systems-930476025933070356'>Contact us!</a></h1>
    </div>
  )
}

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='services'>
      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>Our Products</h1>
        <Instep />
        <Noxia />
        <h4></h4>
      </div>
    </div>
  )
}

export default Possibility
