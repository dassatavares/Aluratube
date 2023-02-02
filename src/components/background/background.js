import React from 'react'
import Image from 'next/image'

// Imports  
import backImage from '../../../public/images/landscape.jpg'

// CSS 
import styles from "./background.module.css";

const Background = () => {
  return (
    <>

      <div>
        <div className={styles.background}></div>
      </div>
    
    </>
  )
}

export default Background