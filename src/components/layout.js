/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle} from 'styled-components';
import Navbar from '../components/globals/navbar/Navbar'
import Footer from '../components/globals/Footer';

// import './bootstrap.min.css';
// import "./layout.css";

import '../sass/layout.scss';



import Header from "./header"

const Layout = ({children}) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
        {children}
      <Footer/>  
    </>
  )
}

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family:'Open-sans', 'sans-serif';
 

}

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
