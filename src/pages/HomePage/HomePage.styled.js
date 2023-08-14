import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomePageSection = styled.div`
  display: flex;
`;

export const HomePageTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  width:100%;
  @media screen and (min-width: 768px) {width:50%; align-items: start;}
`;

export const TitleHomePage = styled.h2`
  letter-spacing: 2px;
  text-align: center;
  margin: 40px auto 20px auto;
  font-size: 14px;

  @media screen and (min-width: 480px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    margin: 80px auto 40px auto;
    font-size: 36px;
  }
`;

export const TextHomePage = styled.p`
  font-size: 12px;
  text-align:center;
  width: 200px;
  margin-bottom: 20px;
  letter-spacing: 2px;
  @media screen and (min-width: 480px) {
    font-size: 14px;
    width: 250px;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 450px;
    text-align:justify;
  }
`;

export const LinkHomePage = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledLinkHomePage = styled(NavLink)`
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  color: inherit;
  font-size: 12px;
  border: none;
  border-radius: 10px;
  background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
  }
  @media screen and (min-width: 480px) {
    padding: 10px 25px;
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
  }
`;
