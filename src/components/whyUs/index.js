import * as whyUsstyles from './whyUs.module.css'
import agile from '../../assets/images/agile.svg'
import customer from '../../assets/images/customer.svg'
import collabration from '../../assets/images/collabration.svg'
import transparent from '../../assets/images/transparent.svg'

import React from 'react'

function WhyUs() {
  return (
    <div className={whyUsstyles.mainContainer}>
      <div className={whyUsstyles.mainSubContainer}>
          <h1 className={whyUsstyles.heading}>Why Us</h1>
          <h2>We work with some of the top brands around the world and have been recognized for our approach,</h2>
          <h2> openness and the agility with which we deliver.</h2>
            <div className={whyUsstyles.companiesContainer}>
              companies
            </div>
            <div className={whyUsstyles.illustrations}>
                <div className={whyUsstyles.illustrationSingle}><img src={agile} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>AGILE DNA</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={customer} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>CUSTOMER EXPERIENCE FOCUSED</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={collabration} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>COLLABORATIVE APPROACH</span></div>
                <div className={whyUsstyles.illustrationSingle}><img src={transparent} className={whyUsstyles.illustrationImage} alt="Main"/><span className={whyUsstyles.illustrationText}>TRANSPARENT PLANNING</span></div>

            </div>
      </div>
    </div>
  )
}

export default WhyUs