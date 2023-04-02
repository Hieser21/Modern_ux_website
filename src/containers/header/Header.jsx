import React from 'react'
import './header.css'
import ai from '../../assets/cyber-security.png'
const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>
         Providing Innovative Security
        </h1>
        <p >
        Aspect was created mainly to provide innovative cyber security solutions. We create distinctive protection for our customers using our industry-leading security intelligence. To combat constantly growing exploits, our service offers a variety of exclusive anti-exploit solutions and services.
        </p>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
