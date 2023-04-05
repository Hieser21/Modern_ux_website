import React from 'react'
import { Feature } from '../../components'
import './features.css'
const InstepFeatures = () => {
  return (
    <div className='' id='instep'>
      <div className='grid text-primary-content place-content-center' style={{fontSize: 48, textAlign: 'center'}}>
        <h1 className='gradient__text'>
        Instep is a powerful Roblox Anti-Exploit tool that helps protect your account from unwanted access and malicious activity. It features several key security features, including...
        </h1>
        <p></p>
      </div>

      <div className='gpt3__features-container grid grid-rows-3 grid-flow-row gap-4'>
      <div className="text-3xl text-accent-content place-content-center text-center">
        Anti Metamethod Hook
        <p>Prevents hackers from tampering with your game data</p></div>
  <div className="grid text-3xl text-accent-content place-content-center text-center">Anti Function Hook
  <p>Blocks attempts to execute malicious code</p>
  </div> 
  <div className="grid text-3xl text-accent-content place-content-center text-center">Anti Dex
  <p>Stops hackers from decompiling your game files</p>
  </div>
      </div>
    </div>
  )
}

export default InstepFeatures
