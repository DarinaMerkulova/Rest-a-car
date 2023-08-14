import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
height: auto;
border-bottom:1px solid rgb(14, 82, 91);
box-shadow: 0 0 20px rgb(14, 82, 91);
position: absolute;
top: 0;
left: 0;
width: 100%;

`
export const StyledNavLink = styled(NavLink)`
display: inline-block;
color:rgb(238, 234, 234);
padding: 10px 10px;
font-size:14px;
text-decoration:none;
transition: color 0.3s ease ;
&:hover{color: rgb(26, 127, 141)
}
&.active {
    color: rgb(26, 127, 141);
    text-decoration:underline;
  }

  @media screen and (min-width: 480px) {
  padding: 10px 15px;
  font-size:18px;}

@media screen and (min-width: 1200px) {
  padding: 15px 25px;}`

export const StyledNavigation = styled.nav`
display: flex;
align-items: center;
`

export const Container = styled.div`
    max-width: 300px;
    padding:15px;
    margin: 0 auto;
@media screen and (min-width: 480px) {
    max-width: 428px;
    }

@media screen and (min-width: 768px) {
    max-width: 768px;
}
@media screen and (min-width: 1200px) {
    max-width: 1200px;
    
}`


export const PhonebookTitle = styled.h2`
  display:none;

 @media screen and (min-width: 768px) {
    display:block;
    font-size: 30px;
  margin: 0 auto;}
`;

export const  HeaderWrapPage = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;`
  

  export const  HeaderWrapRegistration = styled.div`
  display:flex;
  align-items:center;
  margin-left:auto;`

  export const HeaderContainer = styled.div`
   max-width: 300px;
    padding:0 15px;
    margin: 0 auto;
@media screen and (min-width: 480px) {
    max-width: 428px;
    }

@media screen and (min-width: 768px) {
    max-width: 768px;
}
@media screen and (min-width: 1200px) {
    max-width: 1200px;}`