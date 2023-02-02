import React from 'react'
import Image from 'next/image'

// Import
import logo from '../../../public/images/logo.png'

// CSS 
import styles from './header.module.css'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className="search_bar">
          <input type="text" placeholder='Buscar...' />
          <button>Procurar</button>
        </div>
        <div className="theme_mode">
          <button>Dark</button>
        </div>
      </header>
    </>
  )
}

export default Header