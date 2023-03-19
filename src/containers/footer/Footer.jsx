import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/aspect.png'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others?
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Pre-order Instep</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <a href='https://discord.gg/aspect-systems-930476025933070356'><p>https://discord.gg/aspect-systems-930476025933070356</p></a>
         <a href='mailto:team@aspectsystems.xyz'><p>team@aspectsystems.xyz</p></a>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2022 Jamshid. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
