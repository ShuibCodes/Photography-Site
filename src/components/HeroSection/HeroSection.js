import React from "react"
import {Button} from '../Buttons/ButtonElements'
import "./HeroSection.css"
import {Link} from 'gatsby'



function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Name Here</h1>
      <div  className="labels">
          <p className="words">
                Travel |  Events |  Portraits  |
          </p>
      </div>
           
      
      <div className="hero-btns">
       <Link to="/Images" >
       <Button fontBig big primary> Check Out My Work! </Button>
       </Link> 
      </div>

    </div>
  )
}

export default HeroSection
