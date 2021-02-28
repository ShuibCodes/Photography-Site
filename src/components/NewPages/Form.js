import React, {useState, useEffect} from 'react'
import './Contact.css'

const Form = () => {
        const [name, setName] = useState('Shuib')


            const func = () =>{
                if(name === "Shuib"){
                    setName('Avid')
                } else if(name === 'Avid'){
                    setName('Shuib')
                }
            }

            useEffect(() => {
                    
                console.log(`hi ${name}`)
             },[name])
    return (
        <div className="form-style-6">
                <h2> hello {name} </h2>
                    <button onClick={func} >name change</button>
        <form className="box" action="https://formspree.io/f/xyybavee" method="POST" >
         <ul className="form-style-1">
        <li><label>Full Name <span className="required"></span></label><input type="text" name="field1" className="field-divided" placeholder="First" /><span>   </span>
        <input  type="text" name="name" required placeholder="Your Name" className="field-divided" />
            <button>click</button>
        </li>
        <li>
            <label>Email <span className="required"></span></label>
            <input type="email" name="_replyto" className="field-long" required placeholder="Email Address" />
        </li>   
        <li>
            <label >Genre</label>
            <select name="field4" className="field-select">
            <option value="Advertise">Travel</option>
            <option value="Partnership">Portrait</option>
            <option value="General Question">other</option>
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
