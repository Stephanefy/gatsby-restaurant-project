import React from "react"
import img from '../images/images/bcg/portuguese-gravity-M_mDgb8guhA-unsplash.jpg';

import Layout from "../components/layout";
import {Banner} from "../utils/"
import {PageHeader} from '../utils';

import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner 
        title='Qui sommes nous'
        subtitle='connaissez-vous la cuisine coréenne'
      />
    </PageHeader>
  </Layout>
)




export default AboutPage
