import React from 'react'
import navlogo from '../image/iversoft-logo.svg'
import '../Style/Nav.css'

const NavBar = () => {
  return (
    <div>
        <div className="contaiber">
            <div className="bodyBackGround">
                <p>hello.</p>
            </div>
            <div className="NavBox">
                <div className="navlogo">
                   <div className="logo">
                        <div className="logo-image-box">
                            <img src={navlogo} alt="logo"/>
                        </div>
                    </div> 
                </div>
                <div className="menu-box">
                    <div className="menu-item-box">
                        <ul className='menuList'>
                            <li className="menuItem">project</li>
                            <li className="menuItem">servies</li>
                            <li className="menuItem">about</li>
                            <li className="menuItem">careers</li>
                            <li className="menuItem">insights</li>
                            <button className="menuBorder">contact</button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar