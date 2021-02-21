import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../components/Allimage.css"

const Image = () => {
  const data = useStaticQuery(graphql`
  query  {
    allFile
    (filter: 
        {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {nin: ["20200903160705_IMG_8724","20200831183253_IMG_8587",
      
      "20200903162058_IMG_8769","20200613154842_IMG_5658 (3) (6)",
      "20200223152136_IMG_4315 (1)","IMG_6792","IMG_6157","IMG_5722 (1)","20200223145632_IMG_4225 (3)"
      
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
     <>
       <div className="header">
                <h3>Travel</h3>
        </div>
   <div className="image-container">
          
          <div className="image-grid">
              {data.allFile.edges.map((image,key)=> (
                  // adding properties
                  <Img key={key}
                  className="image-item"
                  fluid={image.node.childImageSharp.fluid}
                  alt={image.node.base.split(".")[0]}
                  />
              ))}
          </div>
          
      </div>
     
     </>
    
       
   )

}

export default Image
