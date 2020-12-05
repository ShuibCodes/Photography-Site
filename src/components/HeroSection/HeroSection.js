import React from "react"
import {Button} from '../Buttons/ButtonElements'
import "./HeroSection.css"
import {Link} from 'react-scroll'



function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Name Here</h1>
      <p>Portrait & Travel Photographer</p>
      <div className="hero-btns">
       <Link to="/Images" >
       <Button fontBig big primary> Check Out My Workwwwdddddww! </Button>
       </Link> 
      </div>

    </div>
  )
}

export default HeroSection
