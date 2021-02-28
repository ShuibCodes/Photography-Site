import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import './Portraits.css'



const PortraitImages = () => {
  const data = useStaticQuery(graphql`
  query  {
    allFile
    (filter: 
        {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {nin: ["DSCN2600", "DSCN2602~2","DSCN2658","IMG_20190911_161922" ,"IMG_20190918_155436","MVIMG_20180912_164407","DSCN2667 (1)","IMG_20190911_081651","MVIMG_20180913_164349",
        "MVIMG_20190911_083006",
        
      
      ]}}
        
    ) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
                       ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  
  
  `)
     // map through images and return 
   return(
        <div className="image-container">
            <div className="imageGrid" >
                {data.allFile.edges.map((image,key)=> (
                    // adding properties
                    <Img key={key}
                    className="imageItem"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split(".")[0]}
                    />
                ))}
            </div>
            
        </div>
       
   )

}

export default PortraitImages
