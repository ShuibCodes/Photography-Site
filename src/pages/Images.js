  
import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
// import Image from '../components/Image'
import Context from "../components/TravelContext/Context"
import "../components/Allimage.css"
import image1 from '../images/IMG_20190918_155436.jpg'
import image2 from '../images/IMG_6792.jpg'
import image3 from '../images/20200903160705_IMG_8724.jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


// import Tabs from 'react-bootstrap/Tabs'
const Images = () => (
  <Layout>
    <SEO title="Images" />
    <div id="scroll" > 
    <Context/>
    <Carousel >
          <Carousel.Item interval={3000000}  >

              <img
              className="d-block w-100"
              src={image1}
              alt="First slide"
          />
          </Carousel.Item>
          <Carousel.Item interval={3000000} style={{width: "100%"}}>
              <img 
              className="d-block w-100"
              src={image2}
              alt="Second slide"
              />
          </Carousel.Item>
          <Carousel.Item interval={1000000} style={{width: "100%"}} >
              <img
              className="d-block w-100"
              src={image3}
              alt="Third slide"
              />
          </Carousel.Item>

</Carousel>
    </div>
    
  </Layout>
)

export default Images