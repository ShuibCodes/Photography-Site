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
        name: {nin: ["background", "background2","PeopleWater",]}}
        
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
