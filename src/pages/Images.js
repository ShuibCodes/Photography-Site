  
import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
import Image from '../components/Image'
import Context from "../components/TravelContext/Context"
import "../components/Allimage.css"
import image1 from '../images/IMG_20190918_155436.jpg'
import image2 from '../images/MVIMG_20180912_164407.jpg'
import image3 from '../images/MVIMG_20180912_164407.jpg'
const Images = () => (
  <Layout>
    <SEO title="Images" />
    <div id="scroll" > 
    <Context/>
    <div className="image-containerr">
            <div className="imageGridd">
                <img src={image1}alt="one"className="image-item"></img>
                <img src={image2}alt="one"className="image-item"></img>
                <img src={image3}alt="one"className="image-item"></img>
                <img src={image1}alt="one"className="image-item"></img>
                <img src={image2}alt="one"className="image-item"></img>
                <img src={image3}alt="one"className="image-item"></img>
                <img src={image1}alt="one"className="image-item"></img>
                <img src={image2}alt="one"className="image-item"></img>
                <img src={image3}alt="one"className="image-item"></img>
                {/* <img src={image1}alt="one"className="image-item"></img> */}
      
            </div>
    </div>
    </div>
    
  </Layout>
)

export default Images