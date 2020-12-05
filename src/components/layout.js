import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Navbar from "./Navbar"
import Footer from "./Footer/Footer"
import '../css/custom.css'



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flexBox">
<>
      <Navbar />
    
      
       <main>{children}</main>
      <Footer/>
    </>
    </div>
    
  )
}


export default Layout
