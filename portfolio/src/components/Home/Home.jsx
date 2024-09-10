import React from 'react'
import Styles from './Home.module.css'

import Kaarthiik from '../../assets/Kaarthiik.png'
const Home = () => {
  return (
    <div className={Styles.home}>
        <div>
          <h2>Hello,It's Me</h2>
          <h1>KAARTHIIK M</h1>
          <h2>And im a Frontend Developer</h2>
          <p>abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</p>
        </div>
        <div>
          <img src={Kaarthiik} alt='Kaarthiik img' className={Styles.img}/>
        </div>
    </div>
  )
}

export default Home