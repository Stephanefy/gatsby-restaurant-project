import React from 'react';
import Product from './Product';
import {StaticQuery, graphql, Link} from 'gatsby';
import {Section, Title, SectionButton} from '../../utils';
import styled from 'styled-components';


const PRODUCTS = graphql`
{
    items: allContentfulMenu {
      edges {
        node {
          id
          name
          price
          ingredients
          spinnachChicken {
            fixed(width: 200, height: 200){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
  
`


export default function Menu() {
    return (
        <Section>
            <Title title="featured items" message="petit avant-goût" />
            <ProductList>
                <StaticQuery query={PRODUCTS} render={data => {
                    const products = data.items.edges
                    return products.map(item => {
                        return <Product key={item.node.id} product={item.node} />
                    })
                }} />

            </ProductList>
        </Section>
    )
}




const ProductList = styled.div`
    margin: 3rem 0;
    display: grid;
    grid-template-columns: 100%;
    grid-row-gap: 3rem;
    @media(min-width: 576px){
        grid-template-columns: 95%;

    }
    @media(min-width: 776px){
        grid-template-columns: 80%;
        justify-content: center;
    }
    @media(min-width: 992px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
    }        
`
