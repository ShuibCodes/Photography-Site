import React, {useState}  from 'react'
import './Contact.css'

const Form = () => {
    const [message, setMessage] = useState(false);
    const [ reset, setReset] = useState();


    const Form = () =>{
       setReset("")
    }

    const handleSubmit = (e) =>{    
        e.preventDefault();
        Form();
       setMessage(true);
        
  }
    return (
        
         <form onSubmit={handleSubmit} value={message} >
         <ul className="form-style-1">
        <li><label>Full Name <span className="required"></span></label><input value={reset} type="text" name="field1" className="field-divided" placeholder="First" /> 
        <input value={reset} type="text" name="field2" className="field-divided" placeholder="Last" /></li>
        <li>
            <label>Email <span className="required"></span></label>
            <input value={reset} type="email" name="field3" className="field-long" />
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
            <textarea  value={reset} name="field5" id="field5" className="field-long field-textarea"></textarea>
        </li>
        <li>
            <button className="btn" type="submit" > Submit </button>
            <p className={message ? 'active' : "empty"}>Thanks!</p>

        </li>
    </ul>
        
        </form>
        
       
       
    )
}

export default Form;
