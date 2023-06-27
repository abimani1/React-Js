import React from 'react'
import img1 from '../image/audi-logo.svg'
import img2 from '../image/bell-logo.png'
import img3 from '../image/ericsson-logo.svg'
import img4 from '../image/farmboy-logo.png'
import img5 from '../image/harlequin-logo.svg'
import img6 from '../image/healthcanada-logo.svg'
import img7 from '../image/manulife.png'
import img8 from '../image/download.svg'
import '../Style/partner.css'

const Partner = () => {
  return (
    <div className="container">
        <div className="partner-box">
            <div className="partner-inner-box">
              <div className="partner-head">
                  <p>People we've worked with<span>.</span></p>
              </div>
              <div className="partner-logo">
                  <div className="partner-log-box">
                    <img src={img1} alt="audi" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img2} alt="bell" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img3} alt="ericsson" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img4} alt="farmboy" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img5} alt="harlequin" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img6} alt="health" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img7} alt="manulife" />
                  </div>

                  <div className="partner-log-box">
                    <img src={img8} alt="images" />
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Partner