import React, { useState } from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/asset.svg'
import '../../../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

const Menu = () => (
  <>
    <p>
      <a href='/#home'><p><i className='fi fi-sr-home'></i>Home</p></a>
    </p>
    {/* <p>
      <a href='/#about'><p><i className="fi fi-sr-users"></i>About us</p></a>
    </p> */}
    <p>
    <p><i className="fi fi-sr-box"></i><div className="dropdown dropdown-hover">
  <label tabIndex={0} className="m-1">Services</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a href='/#instep'>Instep</a></li>
    <li><a href='/#noxia'>Noxia</a></li>
  </ul>
</div></p>
    </p>
    <p>
      <a href="/#pricing"><p><i className='fi fi-sr-credit-card'></i>Pricing</p></a>
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
        <a href="https://dashboard.aspectsystems.dev/admin"><button>Dashboard</button></a>
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
          <div className='gpt3__navbar-menu_container scale-up-center text-black'>
            <div className='gpt3__navbar-menu_container text-black'></div>
            <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <a href='https://dashboard.aspectsystems.dev/admin'><button type='button'>Dashboard</button></a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
