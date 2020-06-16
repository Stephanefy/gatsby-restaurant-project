import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Laissez-vous emporter" title="par les saveurs du pays du matin calme" />
        <QuickInfoWrapper>
          <p className='text'>
            Inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Ut enim ad minima veniam, quis nostrum exercitationem
            ullam corporis suscipit laboriosam. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa. Inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Et harum quidem rerum
            facilis est et expedita distinctio. Non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <Link to='/about' style={{textDecoration: 'none'}}>
          <SectionButton style={{ margin: '2rem auto'}}>En savoir plus</SectionButton>
          </Link>
        </QuickInfoWrapper>
        
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;
    .text{
        line-height: 2rem;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
    }
    @media (min-width: 768px){
        width: 70%;
    }
    @media (min-width: 992px){
        width: 60%;
    }
`
