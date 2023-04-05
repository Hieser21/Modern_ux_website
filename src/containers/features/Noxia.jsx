import React from 'react'
import './features.css'
const NoxiaFeatures = () => {
    return (
        <div className='' id='features'>
        <div className='grid text-primary-content place-content-center' style={{fontSize: 48, textAlign: 'center'}}>
          <h1 className='gradient__text'>
          Noxia is a unique Discord bot with the  main goal of protecting
        and preventing users that are part of a server guild, from 
        numerous threats. It has features such as...
          </h1>
        </div>
  
        <div className='gpt3__features-container grid grid-rows-3 grid-flow-row gap-4'>
        <div className="text-3xl text-accent-content place-content-center text-center">
          Anti VPN
          <p>Detects usage of VPN and takes appropriate action</p></div>
    <div className="grid text-3xl text-accent-content place-content-center text-center">Anti Phishing
    <p>Check every link for malicious behavior and give alerts</p>
    </div> 
    <div className="grid text-3xl text-accent-content place-content-center text-center">Global Bans
    <p>Globally bans Phishers, Scammers, Nukers, Raiders, etc.</p>
    </div>
        </div>
      </div>
    )
}

export default NoxiaFeatures