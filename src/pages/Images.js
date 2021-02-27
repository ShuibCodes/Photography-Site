  
import React from "react"
import Layout from '../components/Layout'
import SEO from "../components/seo"
// import Image from '../components/Image'
import '../components/TravelContext/Context.css'
import Context from "../components/TravelContext/Context"
import "../components/Allimage.css"
import image1 from '../images/IMG_20190918_155436.jpg'
import image2 from '../images/IMG_6792.jpg'
import image3 from '../images/20200903160705_IMG_8724.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

const Images = () => (
  <Layout>
    <SEO title="Images" />
    <div id="scroll" > 

    <Container>
  <Row>
    <Col xs={12} md={4}>  <Image src={image1} thumbnail /></Col>
    <Col xs={12} md={4}>  <Image src={image1} thumbnail /></Col>
    <Col xs={12} md={4}>  <Image src={image1} thumbnail /></Col>
    
  </Row>
  <Row>
   <Col xs={12} md={8}>  <Image src={image1} thumbnail /></Col>
    <Col xs={12} md={4}>  <Image src={image1} thumbnail /></Col>
  </Row>
  <Row>
   <Col xs={12} md={4} lg={4} xl={4}>  <Image src={image1} thumbnail /></Col>
    <Col xs={12} md={8} lg={8} xl={8}>  <Image src={image1} thumbnail /></Col>
  </Row>
  <Row>
      <Col xs={12} md={8}>  <Image src={image1} thumbnail /> </Col>
      <Col xs={12} md={4} lg={4} xl={4} >   <Image src={image1} thumbnail /> </Col>
  </Row>
  <Row>
      <Col xs={12} md={12} lg={12} xl={12} >
   
       <Image src={image1} thumbnail />
      </Col>
  </Row>
</Container>
    </div>
    
  </Layout>
)

export default Images