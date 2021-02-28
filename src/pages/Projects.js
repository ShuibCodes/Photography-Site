import React from "react"
import SEO from "../components/seo"
import Layout from '../components/layout'
import Context from '../components/Projects/Context'
import image1 from '../images/DSC_0187 (2).jpg'
import image3 from '../images/DSC_0187 (2).jpg'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';


const Projects = () => (
    
  <Layout>
       <SEO title="Projects" />

       <Context/>
       <div className="album">
                    <Carousel indicators={null} controls={true} touch={true}  >
                    
                    <Carousel.Item  interval={null} style={{width: "100%"}} >

                    <img 
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={null} style={{width: "100%"}}>
                    <img 
                    className="d-block w-100"
                    src={image3}
                    alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={null} style={{width: "100%"}} >
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                    </Carousel.Item>

                </Carousel>
                <div className="album-description">
                    <p className="desc-1" > "I’m Sudanese; both of my parents are Sudanese Nubians, from Sercmato and Dongola.
I’ve lived in England for 6 years, even though I don't visit Sudan as often as I would like to, I’m very in touch with my culture and people back home. Just like London, Sudan as a whole is very diverse. This keeps me intrigued to learn more about both cultures. </p>
<br></br>
<br></br>
<p className="desc-2">Today I’m wearing white representing a working Sudanese woman, and the facial marks are called “Shilukh” which were symbols of beauty as well as an identity marker in the 50-60s. Lines pattern differ depending on the tribe each is from.
One thing I would say about us, is that Sudanese people preserve their values of generosity, kindness, and hospitality."</p>
                </div>
       </div>
       <Context/>
       <div className="album">
                    <Carousel controls={true} touch={true}  >
                    
                    <Carousel.Item  interval={null} style={{width: "100%"}} >

                    <img 
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={null} style={{width: "100%"}}>
                    <img 
                    className="d-block w-100"
                    src={image3}
                    alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item interval={null} style={{width: "100%"}} >
                    <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                    />
                    </Carousel.Item>

                </Carousel>
                <div className="album-description">
                    <p className="desc-1" > "I’m Sudanese; both of my parents are Sudanese Nubians, from Sercmato and Dongola.
I’ve lived in England for 6 years, even though I don't visit Sudan as often as I would like to, I’m very in touch with my culture and people back home. Just like London, Sudan as a whole is very diverse. This keeps me intrigued to learn more about both cultures. </p>
<br></br>
<br></br>
<p className="desc-2">Today I’m wearing white representing a working Sudanese woman, and the facial marks are called “Shilukh” which were symbols of beauty as well as an identity marker in the 50-60s. Lines pattern differ depending on the tribe each is from.
One thing I would say about us, is that Sudanese people preserve their values of generosity, kindness, and hospitality."</p>
                </div>
       </div>
  </Layout>
    
  
      


  
  
   
  
)

export default Projects
