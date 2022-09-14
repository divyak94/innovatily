import React, { useRef } from 'react'
import {useState,  useEffect } from 'react'
import * as styles from './services1.module.css'
import './defaultStyles.css'
// import * as styles2 from './services2.module.css'
import {RightCircleOutlined, CloseCircleOutlined,UpCircleOutlined, DownCircleOutlined} from '@ant-design/icons'

import Development from '../serviceContents/development'
import Solutions from '../serviceContents/solutions'
import Support from '../serviceContents/support'
import Design from '../serviceContents/design'
import "antd/dist/antd.css";
import { Collapse } from 'antd';
const { Panel } = Collapse;

// const useMountEffect = (fun) => useEffect(fun, []);

function Services1(props) {
  const myRef = useRef(null)

  


  const executeScroll = () => {
    console.log("resssss", myRef)
    if (myRef && myRef.current ) {
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
 
 



  // const useMountEffect = (fun) => useEffect(fun, []);

  useEffect(() => {
      // if (typeof window !== "undefined") {
      // 
      console.log('myRef',myRef)
    }, [myRef]);

  const onChange = (key, value) => {
    console.log( key);
    console.log("resssss", myRef)
    // if (myRef && myRef.current ) {
      // myRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // }
    // if(value===1){
    //   window.scrollTo(500, 900)
    // }
    // if(value===2){
    //   window.scrollTo(500, 1000)
    // }
    // if(value===3){
    //   window.scrollTo(500, 1200)
    // }
    // if(value===4){
    //   window.scrollTo(500, 1400)
    // }
    
  }

  const [displayInfo, setDisplayInfo] = useState(true)

  
  useEffect(()=>{ 
    console.log(displayInfo)
  
  },[displayInfo])  
  // useMountEffect(executeScroll)
      return (
        
        <div className={styles.servicesMain}>
          <div className={styles.subMain}>
            <div className={styles.Servicesh1}>Our services</div>
              <div className={styles.Servicesh2}>WE WORK WITH STARTUPS, SMALL BUSINESSES AND </div>
                <div className={styles.Servicesh3}>TO HELP CREATE DIGITAL EXPERIENCES FOR THEIR CUSTOMERS</div>
                  <div className={styles.choices}  ref={myRef}  >
                    <Collapse accordion  className={styles.collapse} expandIconPosition='end'  expandIcon={({ isActive }) => isActive ? <DownCircleOutlined className={styles.downArrow} onClick={executeScroll} /> : <UpCircleOutlined />} onChange={onChange}>
                          <Panel className={styles.panelSize}  header="Design" key="Design"  >
                              <Design   />
                          </Panel>
                          <Panel className={styles.panelSize} header="Solutioning" key="Solutioning">
                              <Solutions />
                          </Panel>
                          <Panel className={styles.panelSize} header="Development" key="Development">
                              <Development />
                          </Panel>
                          <Panel className={styles.panelSize} header="Support and Ops" key="Support and Ops">
                              <Support  />
                          </Panel>
                    </Collapse>
   
            </div> 
          </div>
        </div> 
      )
}

export default Services1