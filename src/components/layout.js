import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
}


export default Layout
