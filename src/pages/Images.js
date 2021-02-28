  
import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
// import Image from '../components/Image'
import '../components/TravelContext/Context.css'
// import Context from "../components/TravelContext/Context"
import "../components/Allimage.css"

import riverBoat from '../components/TravelPics/river-boat.jpg'
import palmTrees from '../components/TravelPics/palm-trees.jpg'
import beachPath from '../components/TravelPics/beach-path.jpg'
import water from '../components/TravelPics/water.jpg'
import boats from '../components/TravelPics/boats.jpg'


import oldTown from '../components/TravelPics/old-town.jpg'
import barren  from '../components/TravelPics/barren.jpg'
import rocks from '../components/TravelPics/rocks.jpg'
import bushes  from '../components/TravelPics/bushes.jpg'
import  oldMen from '../components/TravelPics/old-men.jpg'

import oldTownPath from '../components/TravelPics/old-town-path.jpg'
import townPath  from '../components/TravelPics/town-path.jpg'
import schoolKids from '../components/TravelPics/school-kids.jpg'
import donkeyBoy  from '../components/TravelPics/boy-on-donkey.jpg'
import  buildingView from '../components/TravelPics/building-view.jpg'
import  villageView from '../components/TravelPics/village-view.jpg'
import donkeyCar from '../components/TravelPics/donkey-car.jpg'

import waterFall from '../components/TravelPics/water-fall.jpg'
import skyTrees from '../components/TravelPics/blue-sky-trees.jpg'
import dirtyRiver from '../components/TravelPics/dirty-river.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Images = () => (
  <Layout>
    <SEO title="Images" />
    <div id="scroll" > 

    <Container>
  <Row>
    <Col xs={12} md={6}>
  
        <Image style={{border:"0px"}} src={riverBoat} thumbnail />
    

    </Col>
    <Col xs={12} md={6}><Image style={{border:"0px"}}  src={palmTrees} thumbnail /></Col>
    

    
  </Row>
  <Row>
   <Col xs={12} md={6}><Image style={{border:"0px"}}  src={beachPath} thumbnail /></Col>
   <Col xs={12} md={6}><Image style={{border:"0px"}}  src={water} thumbnail /></Col>
  
    
   
  </Row>

  <Row >
   <Col  md={"auto"}><Image className="large" style={{MaxWidth: '1120px', width:"1120px", border:"0px"}} src={boats} thumbnail /></Col>

  </Row>
  <Row>
    <Col xs={12} md={6}><Image style={{border:"0px"}} src={oldTown} thumbnail /></Col>
    <Col xs={12} md={6}><Image style={{border:"0px"}}  src={barren} thumbnail /></Col>
    
 
    
  </Row>
  <Row>
   <Col xs={12} md={6}><Image style={{border:"0px"}}  src={rocks} thumbnail /></Col>
   <Col xs={12} md={6}><Image style={{border:"0px"}}  src={bushes} thumbnail /></Col>
  
    
   
  </Row>

  <Row >
   <Col  md={"auto"}><Image className="large" style={{MaxWidth: '1120px', width:"1120px", border:"0px"}} src={oldMen} thumbnail /></Col>

  </Row>

      <Row>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={oldTownPath} thumbnail /></Col>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={townPath} thumbnail /></Col>
      </Row>
      <Row>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={schoolKids} thumbnail /></Col>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={donkeyBoy} thumbnail /></Col>
      </Row>
      <Row>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={buildingView} thumbnail /></Col>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={villageView} thumbnail /></Col>
      </Row>
      <Row >
   <Col  md={"auto"}><Image className="large" style={{MaxWidth: '1120px', width:"1120px", border:"0px"}} src={donkeyCar} thumbnail /></Col>

  </Row>
  <Row>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={waterFall} thumbnail /></Col>
            <Col xs={12} md={6}><Image style={{border:"0px"}}  src={skyTrees} thumbnail /></Col>
      </Row>
      <Row >
   <Col  md={"auto"}><Image className="large" style={{MaxWidth: '1120px', width:"1120px", border:"0px"}} src={dirtyRiver} thumbnail /></Col>

  </Row>
</Container>
    </div>
    
  </Layout>
)

export default Images