import React from "react"
import { FaBeer } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HomeHeader, Banner, BannerButton } from '../utils';
import img  from '../images/images/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo';
import Gallery from '../components/HomePageComponents/Gallery-1';

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
  </Layout>
)




export default IndexPage
