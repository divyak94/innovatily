import * as React from "react"
import {useState,  useEffect} from 'react'
import * as mainStyles from './index.module.css'
import logoWhite from '../assets/images/whiteLogo.svg'
import pattern from '../assets/images/pattern.svg'
import patternhero from '../assets/images/patternhero.svg'
import hero from '../assets/images/hero.svg'
import Layout from '../components/layout'
import Services1 from "../components/ourServices/services1"
import Services2 from "../components/ourServices/services2"
import WhyUs from "../components/whyUs"
import OurWork from "../components/ourWork"
import Awards from "../components/awards/awards"
import Contact from "../components/contactUs"



const IndexPage = (props) => {
  const [servicesView, setServicesView] = useState(true)
  const [servicesViewSmall, setServicesViewSmall] = useState(false)

  console.log(props)



  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Layout pageTitle="Home Page">
      <div className={mainStyles.homePageMainContainer}>
        <div className={mainStyles.scrollSlideClass}>
          
          <div className={mainStyles.mainContainer1}>
              <div className={mainStyles.heroPageContent1}>

                 <div className={mainStyles.heroPageSubContent2}>
                      <div className={mainStyles.first}>WE CREATE  </div> 
                      <div className={mainStyles.second}><em>APPS</em>&nbsp;&nbsp;THAT</div>
                      <div className={mainStyles.third}>PERFORM </div>
                      <div className={mainStyles.fourth}>AND SCALE<span className={mainStyles.stop}>.</span></div>
                  </div>
                  <div className={mainStyles.heroPageSubContent1}>
                      <div className={mainStyles.heroImage}><img src={hero} alt="Main"/></div>
                      
                  </div> 
                 

           
              </div>
              {/* <div className={mainStyles.pattern}><img src={patternhero} alt="pattern"/></div> */}
               
          </div>


        <div className={mainStyles.mainContainer2}>
          <div className={mainStyles.mainSubContainer2}>
           
         
                <Services1  />
                <WhyUs />
                <OurWork/>
                <Awards/>
                <Contact/>
            
               

              </div>
          </div>
        </div>


        <div className={mainStyles.mainContainer3}>


        </div>


      </div>

    </Layout>
   
  )
}

export const Head = () => <title>Home Page</title>
export default IndexPage


