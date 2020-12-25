import React from "react"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import '../css/custom.css'



const Layout = ({ children }) => {

  return (
    <>
    <div className="flexBox">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    
    </div>

    </>
   
    
  )
 
  
}


export default Layout
