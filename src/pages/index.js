import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection/HeroSection"
import Image from '../components/Image'
import Footer from '../components/Footer/Footer'
import PortraitPages from "../components/NewPages/PortraitPages"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection/>
    <Image />
    <PortraitPages/>
  </Layout>
)

export default IndexPage
