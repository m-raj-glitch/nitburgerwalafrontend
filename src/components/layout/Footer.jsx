import React from 'react'
import {AiFillGithub,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
function Footer() {
  return (
    <footer>
        <div>
            <h2>NIT BURGER WALA</h2>
            <p>We are tying to give you the best taste possible.</p>
            <br/>
            <em>We give attention to genuine feedback.</em>
            <strong>All rights reserved @nitburgerwala </strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href='https://www.instagram.com/__madhul.raj__/'><AiFillInstagram/></a>
            <a href='https://www.linkedin.com/in/madhul-raj-a48324213/'><AiFillLinkedin/></a>
            <a href='https://github.com/m-raj-glitch'><AiFillGithub/></a>
        </aside>
    </footer>
  )
}

export default Footer