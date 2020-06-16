import React from "react"

import img from '../images/images/bcg/goodeats-yqr-LY4xyLYX5Vs-unsplash.jpg'
import Layout from "../components/layout"
import {Banner} from '../utils'
import SEO from "../components/seo"
import {PageHeader} from '../utils';


const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageHeader img={img}>
      <Banner
          title="Notre menu"
          subtitle="découvrez notre carte"
       />
    </PageHeader>
  </Layout>
)




export default MenuPage;
