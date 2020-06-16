import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';

import {styles, Section} from '../../utils'

const Gallery = () => {
    const data = useStaticQuery(graphql`
    query {
        img1: file(relativePath: {eq: "images/delaney-van-pmTMvAd8akU-unsplash.jpeg"}) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
  `)


    return <Img fluid={data.img1.childImageSharp.fluid} />
}


export default Gallery;