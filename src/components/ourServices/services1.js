import React, { useRef } from 'react'
import {useState,  useEffect } from 'react'
import * as styles from './services1.module.css'
import './defaultStyles.css'
import {UpCircleOutlined, DownCircleOutlined, PlusOutlined } from '@ant-design/icons'
import Development from '../serviceContents/development'
import Solutions from '../serviceContents/solutions'
import Support from '../serviceContents/support'
import Design from '../serviceContents/design'
import "antd/dist/antd.css";
import { Collapse } from 'antd';
const { Panel } = Collapse;


  function Services1(props) {
    const myRef = useRef(null)
   
    useEffect(() => {
      
        console.log('myRef',myRef)
      }, [myRef]);

    const onChange = (key, value) => {
      console.log( key);
      if (myRef && myRef.current ) {
            myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }        
    }

      return (
        
        <div className={styles.servicesMain}>
          <div className={styles.subMain}>
            <div className={styles.Servicesh1}>our services</div>
              <div className={styles.Servicesh2}>WE WORK WITH STARTUPS, SMALL BUSINESSES AND </div>
                <div className={styles.Servicesh3}>TO HELP CREATE DIGITAL EXPERIENCES <em>FOR THEIR CUSTOMERS</em> </div>
                  <div className={styles.choices} ref = {myRef} >
                    <Collapse accordion  className={styles.collapse} expandIconPosition='end' bordered={false} expandIcon={({ isActive }) => isActive ? null : <PlusOutlined className={styles.plusOutlined} />} onChange={onChange}>
                          <Panel className={styles.panelSize}  header="DESIGN" key="Design"  >
                              <Design  />
                          </Panel>
                            <div style = {{width:'93%',margin: 'auto',borderBottom:'1px solid lightgrey'}}></div>

                          <Panel className={styles.panelSize} header="SOLUTIONING" key="Solutioning">
                              <Solutions />
                          </Panel>
                            <div style = {{width:'93%',margin: 'auto',borderBottom:'1px solid lightgrey'}}></div>
                          <Panel className={styles.panelSize} header="DEVELOPMENT" key="Development">
                              <Development />
                          </Panel>
                            <div style = {{width:'93%',margin: 'auto',borderBottom:'1px solid lightgrey'}}></div>
                          <Panel className={styles.panelSize} header="SUPPORT & OPS" key="Support and Ops">
                              <Support  />
                          </Panel>
                            <div style = {{width:'93%',margin: 'auto',borderBottom:'1px solid lightgrey'}}></div>
                    </Collapse>
   
            </div> 
          </div>
        </div> 
      )
}

export default Services1