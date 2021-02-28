import React from 'react'
import SEO from "../components/seo"
import '../components/NewPages/Contact.css'
import Form from '../components/NewPages/Form'
import Layout from '../components/layout'

const Contact = () =>(
    <Layout>
           <div className="background">
            <SEO title="Contact"  />
   
            <h1 className="heading" >Get In Touch!</h1>
            <Form/>

         </div>
    </Layout>
    

      
)


export default Contact