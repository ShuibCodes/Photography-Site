import React from "react"
import SEO from "../components/seo"

import Layout from '../components/Layout'
import PortraitImages from "../components/Portraits/PortraitImages"
import Context from "../components/PortraitContext/Context"




const Portraits = () => (
  <Layout>
       <SEO title="Portraits" />
       <Context/>
    <PortraitImages />
    <div>HELLO</div>
  </Layout>
    
  
      


  
  
   
  
)

export default Portraits
