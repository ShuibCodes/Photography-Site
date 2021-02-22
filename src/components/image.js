import React from "react"
import "../components/Allimage.css"
import image1 from '../images/IMG_20190918_155436.jpg'
import image2 from '../images/MVIMG_20180912_164407.jpg'
import image3 from '../images/MVIMG_20180912_164407.jpg'
const Image = () => {
 
return(
    <div className="image-container">
            <div className="imageGrid">
                <img src={image1}alt="one"className="imageItem"></img>
                <img src={image2}alt="one"className="imageItem"></img>
                <img src={image3}alt="one"className="imageItem"></img>
                <img src={image1}alt="one"className="imageItem"></img>
                <img src={image2}alt="one"className="imageItem"></img>
                <img src={image3}alt="one"className="imageItem"></img>
                <img src={image1}alt="one"className="imageItem"></img>
                <img src={image2}alt="one"className="imageItem"></img>
                <img src={image3}alt="one"className="imageItem"></img>
                <img src={image1}alt="one"className="imageItem"></img>
      
            </div>
    </div>
        


        
       
   )

}

export default Image