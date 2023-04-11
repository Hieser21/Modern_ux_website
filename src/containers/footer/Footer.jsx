import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/asset.svg'
import '../../../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to step in to the future before others?
        </h1>
      </div>
      <button className='gpt3__footer-btn btn-outline btn-primary'>Pre-order Instep</button>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <div className='divider divider-horizontal'></div>
          <a href='https://discord.gg/aspect-systems-930476025933070356'><i className='fi fi-brands-discord'></i></a>
          <i className='fi fi-brands-youtube'></i>
          <i className='fi fi-brands-twitter'></i>
         <p>Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a></p><br></br>
          <p>Aspect Systems, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Resources</h4>
          <p>Docs</p>
          <p>Help Desk</p>
          <p>Blog</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p><a target='blank' className='hover:color-black' style={{textDecoration: 'none'}} href='https://docs.google.com/document/d/1sLf3qj8XlGMifZAk3LgbRL5JBCmVt8IfhgA-eqAogAo/edit?usp=sharing'>Terms & Conditions</a></p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
         <a href='mailto:team@aspectsystems.dev'><p>team@aspectsystems.dev</p></a>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 Aspect Systems. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
