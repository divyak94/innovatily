import React from 'react'
import * as styles from './development.module.css'

import development from '../../../assets/images/development.svg'

function Development() {
  return (
        <div className={styles.mainContainer}>
            <div className={styles.designImageMain}>
                <img className={styles.designImage} src={development} alt="Main"/>

            </div>

            <div className={styles.designContentMain}>
                <div className={styles.designContent}>
                    <div className={styles.h1}>Development</div>
                    <div className={styles.h2} >Our design philosophy is centered around delivering experiences that <strong>SIMPLY WORK.</strong> </div >
                    <p className={styles.p1}>This philosophy translates to delivering application designs that are centered around your users, designed by understanding and empathizing with your users through a well defined and structured process.</p>

                </div>

            </div>
        
            <div>

            </div>
        </div>
  )
}

export default Development