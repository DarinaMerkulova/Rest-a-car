import styled from "styled-components";
import car from "..//..//../image/car.jpg"
export const Hero =styled.section`
 width: 100vw;
  min-height: 550px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${car});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 164px 0 64px 0;
`

export const HeroTitle =styled.h1`
font-size:54px;
margin-left:50px;
` 

export const HeroSubtitle = styled.h2`
font-size:40px;
margin-left:40px;
color: rgb(26, 127, 141);
`

export const TitleWrap = styled.div`
display:flex;
align-items:center;`