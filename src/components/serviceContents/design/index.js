import React from 'react'
import * as styles from './design.module.css'
import design from '../../../assets/images/design.svg'

function Design() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.designImageMain}>
            <img className={styles.designImage} src={design} alt="Main"/>

        </div>

        <div className={styles.designContentMain}>
            <div className={styles.designContent}>
                <h1>DESIGN</h1>
                <h2>Our design philosophy is centered around delivering experiences that <strong>SIMPLY WORK.</strong> </h2>
                <p>This philosophy translates to delivering application designs that are centered around your users, designed by understanding and empathizing with your users through a well defined and structured process.</p>

            </div>

        </div>
       
        <div>

        </div>
    </div>
  )
}

export default Design