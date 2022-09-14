import React from 'react'
import { footer } from './footer.module.css'
import * as footerStyles from "./footer.module.css"
import { Link } from 'gatsby';
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/insta.svg'
import twitter from '../../assets/images/twitter.svg'
import linkedin from '../../assets/images/linkedin.svg'

function Footer() {
  return (
    <div className={footerStyles.mainFooter}>
    <div className={footerStyles.footer}>
        <div className={footerStyles.footerMainContent}>
            
            <div className={footerStyles.footerContent}>
                <h1 className={footerStyles.footerContentLink}>LINKS</h1>
                    <Link className={footerStyles.footerLinks} to="/services">Services</Link>
                    <Link className={footerStyles.footerLinks} to="/story">Story</Link>
                    <Link className={footerStyles.footerLinks} to="/work">Work</Link>
                    <Link className={footerStyles.footerLinks} to="/learn">Learn</Link>
                    <Link className={footerStyles.footerLinks} to="/careers">Careers</Link>
                    <Link className={footerStyles.footerLinks} to="/contact">Contact</Link>
            </div>

            <div className='footerAddress'>
                    <div className={footerStyles.footerAddress}>
                        <h1 className={footerStyles.footerContentAddress}>Our Address</h1>
                        <h2 className={footerStyles.footerContentAddress2}># 3582,13 G Main Road, 4th Cross Rd,</h2>
                        <h2 className={footerStyles.footerContentAddress2}>Doopanahalli, Indiranagar, </h2>
                        <h2 className={footerStyles.footerContentAddress2}>Bengaluru, Karnataka,</h2>
                        <h2 className={footerStyles.footerContentAddress2}>India 560008</h2>

                        <div className={footerStyles.contactus}>
                            <h3 className={footerStyles.footerContentContact}>+91 9886233161</h3>
                            <h3 className={footerStyles.footerContentContact}>sales@innovatily.com</h3>
                        </div>
                    </div>
            </div>
        </div>
        
            <div className={footerStyles.socialMedia}>
                <div><img src={facebook} alt="Main" className={footerStyles.facebook}/></div>
                <div><img src={instagram} alt="Main" className={footerStyles.instagram}/></div>
                <div><img src={twitter} alt="Main" className={footerStyles.twitter}/></div>
                <div><img src={linkedin} alt="Main" className={footerStyles.linkedin}/></div>
            </div>
    </div>
        <div className={footerStyles.rights}>© 2022 Innovatily. All Rights Reserved. Muffin groudiv</div>
    </div>
  )
}

export default Footer