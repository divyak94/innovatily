import React from 'react'
import * as styles from './ourWork.module.css';
import { Button } from 'antd';
import mobileMock from '../../assets/images/mobileMock.svg'
import {RightCircleOutlined, CloseCircleOutlined,ArrowRightOutlined, ArrowLeftOutlined} from '@ant-design/icons'
import './workdefaultFiles.css'
function OurWork() {
  return (
    <div className = {styles.mainContainer}>
      <div className = {styles.mainSubContainer}>
        <div className = {styles.mainSubContainer1}>
          <div className = {styles.mainSubContainerLeft}>

            <div className = {styles.mainSubContainerLeftContent}>
              <span className = {styles.mainSubContainerHeading}>  Our Work</span>
                <div className = {styles.mainSubContainerHeading2}> <div>Toolbox Partner</div><div>Application</div></div>
                  <div className = {styles.mainSubContainerHeading3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                  <Button className = {styles.btn1}>View Project</Button>
                  <div className = {styles.arrows}>
                    <div className = {styles.arrows1}><ArrowLeftOutlined /></div>
                    <div className = {styles.arrows2}><ArrowRightOutlined /></div>
                  </div>
            </div>
            </div>
            <div className = {styles.mainSubContainerRight}>
              <div className = {styles.mainSubContainerRightContent}>
                <img src ={mobileMock} className={styles.mobileImg}/>                 
              </div>
        </div>
      {/* <div className = {styles.mainSubContainer}>
        <div className = {styles.mainSubContainerLeft}>
          <span className = {styles.mainSubContainerHeading}>  Our Work</span>
              <div className = {styles.mainSubContainerHeading2}> <div>Toolbox Partner</div><div>Application</div></div>
              <div className = {styles.mainSubContainerHeading3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
              <Button className = {styles.btn1}>View Project</Button>
              <div className = {styles.elements}>
              <Button className = {styles.btn1}>View Project</Button>
              <div className = {styles.arrows}>
                <div className = {styles.arrows1}><ArrowLeftOutlined /></div>
                <div className = {styles.arrows2}><ArrowRightOutlined /></div>
              </div>
            </div>

        </div>
        <div className = {styles.mainSubContainerRight}>
          <div className= {styles.mobileContainer}>
            <img src ={mobileMock} />
          </div>
          
        </div>
      </div> */}
       
       </div>
      </div>

    </div>
  )
}

export default OurWork