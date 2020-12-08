import React from "react"
import {Button} from '../Buttons/ButtonElements'
import "./HeroSection.css"
import {Link} from 'gatsby'



function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Name Here</h1>
      <div className="subheading">
              <ul className="words">
                    <li className="each-word"> Travel | </li>
                    <li className="each-word"> Events | </li>
                    <li className="each-word"> Portraits | </li>
              </ul>
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
