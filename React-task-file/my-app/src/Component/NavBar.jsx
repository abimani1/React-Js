import React from 'react'
import navlogo from '../image/iversoft-logo.svg'
import project from '../image/projects-icon.svg'
import service from '../image/services-icon.svg'
import about from '../image/about-icon.svg'
import career from '../image/careers-icon.svg'
import insight from '../image/insights-icon.svg'
import '../Style/Nav.css'

const NavBar = () => {
  return (
    <div>
        <div className="contaiber">
            {/* <div className="bodyBackGround">
                <p>hello.</p>
            </div> */}
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
                            <li className="menuItem"> project</li>
                            <li className="menuItem"> servies</li>
                            <li className="menuItem"> about</li>
                            <li className="menuItem"> careers</li>
                            <li className="menuItem">insights</li>
                            <button className="menuBorder">contact</button>
                        </ul>
                        <ul className='down-menuList'>
                            <li className="down-menuItem"><img src={project} alt="project"/>project</li>
                            <li className="down-menuItem"><img src={service} alt="service" />servies</li>
                            <li className="down-menuItem"><img src={about} alt="about" />about</li>
                            <li className="down-menuItem"><img src={career} alt="career" />careers</li>
                            <li className="down-menuItem"><img src={insight} alt="insight" /> insights</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar