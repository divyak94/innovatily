import React from 'react'
import * as styles from './awards.module.css'
import award1 from '../../assets/images/award1.png'

function Awards() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.mainSubContainer}>
            <div className={styles.heading1}>Awards & Recognitions </div>
            <div className={styles.images}>

            {/* <div className={styles.image}>
              <img src={award1} alt="award1" className={styles.imageCls}/>
            </div>
            <div className={styles.image}>
              <img src={award1} alt="award1" className={styles.imageCls}/>
            </div>

            <div className={styles.image}>
              <img src={award1} alt="award1" className={styles.imageCls}/>
            </div> */}
            <img src={award1} alt="award1" className={styles.imageCls}/>
            <img src={award1} alt="award1" className={styles.imageCls}/>
            <img src={award1} alt="award1" className={styles.imageCls}/>
            
            </div>
           

        </div>
    </div>
  )
}

export default Awards