import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection/HeroSection"
// import Image from "../components/image"
import About from '../components/About Me/About'
// import Travel from "./Travel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home " />
    <HeroSection/>
    <About />
   {/* <Image /> */}
  </Layout>
)

export default IndexPage
