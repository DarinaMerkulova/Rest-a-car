import React from 'react'

import { Hero, HeroSubtitle, HeroTitle, TitleWrap } from './HeroSection.styled'
import { Container } from 'components/App/App.styled'
const HeroSection = () => {
  return (
    <Hero>
    <Container>
        <TitleWrap>
    <HeroTitle>Car rental</HeroTitle>
    <HeroSubtitle>right of redemption</HeroSubtitle>
    </TitleWrap>
    </Container>
    </Hero>
     )
}

export default HeroSection
