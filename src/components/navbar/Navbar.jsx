import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/aspect.png'

const Menu = () => (
  <>
    <p>
      <a href='#home'>Home</a>
    </p>
    <p>
      <a href='#whgpt3'>About us</a>
    </p>
    <p>
      <a href='#possibility'>Services</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-link'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} width={"100px"} height={'100px'} alt='logo' />
        </div>
      </div>
      <div className='gpt3__navbar-links_container'>
        <Menu />
      </div>
      <div className='gpt3__navbar-sign'>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color='#fff'
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}{' '}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container'></div>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
