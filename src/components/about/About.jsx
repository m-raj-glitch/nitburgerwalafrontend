import React from 'react'
import { Link } from 'react-router-dom'
import {RiFindReplaceLine} from "react-icons/ri"
import mr from "../../assests/Founderimg.png"
function About() {
  return (
    <section className='about'>
        <main>
            <h1>About Us</h1>
            <article>
                <h4>NIT BURGER WALA</h4>
                <p>We are NIT Burger Wala. The Place for most tasty burgers on the Earth.</p>
                <p>Explore the varius types of food and burgers. Click Below to see the menu.</p>
                <Link to="/">
                    <RiFindReplaceLine />
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={mr} alt='Founder'/>
                        <h3>Madhul Raj</h3>
                    </div>
                    <p>I am Madhul Raj, the founder of NIT Burger Wala. Affiliated to God Taste... </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About