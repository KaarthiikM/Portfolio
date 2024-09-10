import React from 'react'
import Styles from './About.module.css'

import Kaarthiik from '../../assets/Kaarthiik.png'
const About = () => {
  return (
    <div className={Styles.about}>
        <div>
            <img src={Kaarthiik} alt='kaarthiik img' className={Styles.img}/>
        </div>
        <div>
            <h2>About Me</h2>
            <h4>Frontend Developer!</h4>
            <p>abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz abcdefghijklmnopqrstuvwxyz</p>
        </div>
    </div>
  )
}

export default About