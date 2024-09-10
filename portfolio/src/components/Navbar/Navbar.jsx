import React from 'react'
import KLogo from '../../assets/k.jpg'
import Styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div>
       <header className={Styles.navbar}>
        <div className={Styles.navitems}>
        <img src={KLogo} alt='logo' className={Styles.logo}/>
        <h2 className={Styles.title}>Portfolio</h2>
        </div>
        <nav className={Styles.navitems}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href='#resume'>Resume</a>
        </nav>
       </header>
    </div>
  )
}

export default Navbar