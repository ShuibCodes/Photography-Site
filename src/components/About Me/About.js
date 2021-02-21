import React from 'react'
import './About.css'
import marwa from '../../images2/marwa.jpg'

export default function About() {
    return (
        <div>
                <div className="header">
                <h3>About Me</h3>
            
        </div>
        <div className="about">
                    <img src={marwa} alt="marwa" ></img>
                    <p className="info">
                    I am a born and raised Londoner but originally rubatabia, from abu hamad/mograt island. I've been in the UK all of my life, only visiting sudan during short holidays.
                        <br></br>
                        <br></br>
                        Anyone who knows me, knows that you can't keep me away from sudan, so I'm here whenever I can be. for this reason, the sudanese element I've chosen to represent in my pictures is being right here in the motherland!
                    </p>
        </div>
        </div>
    )
}
