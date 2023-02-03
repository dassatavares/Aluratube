import React from 'react'

// CSS 
import styles from './profile.module.css'

const Profile = () => {
  return (
    <>
      <div className={styles.profile}>
        <img src="https://github.com/dassatavares.png" alt="" />
        <div>
          <h1>Dassaev Tavares</h1>
          <h4>Web Developer</h4>
          <a href="https://github.com/dassatavares" target='_blank' >
            <button>Seguir</button>
          </a>
        </div>
      </div>
    </>
  )
}

export default Profile