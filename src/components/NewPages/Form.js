import React from 'react'
import './Contact.css'

const Form = () => {
    return (
        <div className="form-style-6">
        <form className="box" action="https://formspree.io/f/xyybavee" method="POST" >
         <ul className="form-style-1">
        <li><label>Full Name <span className="required"></span></label><input type="text" name="field1" className="field-divided" placeholder="First" /><span>   </span>
        <input  type="text" name="name" required placeholder="Your Name" className="field-divided" /></li>
        <li>
            <label>Email <span className="required"></span></label>
            <input type="email" name="_replyto" className="field-long" required placeholder="Email Address" />
        </li>   
        <li>
            <label>Genre</label>
            <select name="field4" className="field-select">
            <option value="Advertise">Travel</option>
            <option value="Partnership">Portrait</option>
            <option value="General Question">General</option>
            </select>
        </li>
        <li>
            <label>Your Message <span className="required"></span></label>
            <textarea className="field-long field-textarea"  name="message" required placeholder="Type your Message"></textarea>
        </li>
        <li>
              <input className="btn" type="submit" value="Send" />    

        </li>
    </ul>
        
        </form>
        </div>
         
        
       
       
    )

        
  }
    

export default Form;
