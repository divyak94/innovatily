import * as whyUsstyles from './whyUs.module.css'
import agile from '../../assets/images/agile.svg'
import customerExp from '../../assets/images/customerExp.svg'
import collabration from '../../assets/images/collabration.svg'
import Picture1 from '../../assets/images/Picture1.png'
import Picture2 from '../../assets/images/Picture2.png'
import Picture3 from '../../assets/images/Picture3.png'
import Picture4 from '../../assets/images/Picture4.png'
import Picture5 from '../../assets/images/Picture5.png'
import Picture6 from '../../assets/images/Picture6.png'
import Picture7 from '../../assets/images/Picture7.png'
import Picture8 from '../../assets/images/Picture8.png'
import Picture9 from '../../assets/images/Picture9.png'
import Picture10 from '../../assets/images/Picture10.png'
import Picture11 from '../../assets/images/Picture11.png'
import transparent from '../../assets/images/transparent.svg'
import transparentPlaning from '../../assets/images/transparentPlaning.svg'
import agiledna from '../../assets/images/agiledna.svg'
import collaborative from '../../assets/images/collaborative.svg'


import React from 'react'

function WhyUs() {
  return (
    <div className={whyUsstyles.mainContainer}>
      <div className={whyUsstyles.mainSubContainer}>
          <h1 className={whyUsstyles.heading}>why us?</h1>
          <p className={whyUsstyles.pHeading}>We work with some of the top brands around the world and have been recognized for our approach,</p>
          <p className={whyUsstyles.pHeading}> openness and the agility with which we deliver.</p>
            <div className={whyUsstyles.companiesContainer}>
             <div className={whyUsstyles.companiesSubContainer}>
                <img className={whyUsstyles.imageDiv} src={Picture1}/>
                <img className={whyUsstyles.imageDiv} src={Picture2}/>
                <img className={whyUsstyles.imageDiv} src={Picture3}/>
                <img className={whyUsstyles.imageDiv} src={Picture4}/>
                <img className={whyUsstyles.imageDiv} src={Picture5}/>
                <img className={whyUsstyles.imageDiv} src={Picture6}/>
                <img className={whyUsstyles.imageDiv} src={Picture7}/>
                <img className={whyUsstyles.imageDiv} src={Picture7}/>
                <img className={whyUsstyles.imageDiv} src={Picture9}/>
                <img className={whyUsstyles.imageDiv} src={Picture10}/>
                <img className={whyUsstyles.imageDiv} src={Picture11}/>
            </div>
            </div>
            <div className={whyUsstyles.illustrations}>
                <div className={whyUsstyles.illustrationSingle}><img src={agiledna} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>AGILE DNA</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={customerExp} className={whyUsstyles.illustrationImage} alt="Main"/> <span className={whyUsstyles.illustrationText}>CUSTOMER EXPERIENCE FOCUSED</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={collaborative} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>COLLABORATIVE APPROACH</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={transparentPlaning} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>TRANSPARENT PLANNING</span></div>

            </div>
      </div>
    </div>
  )
}

export default WhyUs