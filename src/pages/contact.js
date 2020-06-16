import React from "react"

import img from '../images/images/bcg/goodeats-yqr-v4vxUH-pYpA-unsplash.jpg'
import Layout from "../components/layout"
import { Banner } from '../utils';
import SEO from "../components/seo"
import {PageHeader} from '../utils';


const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
        <Banner title="Réservation" subtitle="Appelez-nous pour résever" />
    </PageHeader>
  </Layout>
)




export default ContactPage
