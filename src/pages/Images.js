import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
import Image from '../components/Image'
import Context from "../components/TravelContext/Context"

const Images = () => (
  <Layout>
    <SEO title="Images" />
    <div id="scroll" > 
    <Context/>
    <Image />
    </div>
    
  </Layout>
)

export default Images
