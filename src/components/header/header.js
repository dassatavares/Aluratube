import React from 'react'
import Image from 'next/image'

// Import
import logo from '../../../public/images/logo.png'
import search from '../../../public/images/search.png'

// CSS 
import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.search_bar}>
          <input type="text" placeholder='Buscar...' />
          <button><Image src={search} alt="" /></button>
        </div>
        <div className={styles.user}>
          <img src="https://github.com/dassatavares.png" alt="" />
        </div>
      </header>
    </>
  )
}

export default Header