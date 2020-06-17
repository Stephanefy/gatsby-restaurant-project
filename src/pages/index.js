import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils';
import img  from '../images/images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo';
import Gallery from '../components/HomePageComponents/Gallery-1';
import Menu from '../components/HomePageComponents/Menu';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHeader img={img}>
      <Banner title="restaurant coréen"
        subtitle="10 rue Jules Vernes, 97400, Saint-Denis"
      >
      <BannerButton style={{ margin:'2rem auto'}}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
    <Menu />
  </Layout>
)




export default IndexPage
