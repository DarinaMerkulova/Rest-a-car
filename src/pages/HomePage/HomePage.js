import React from 'react';
import {
  HomePageSection,
  HomePageTextWrap,
  LinkHomePage,
  StyledLinkHomePage,
  TextHomePage,
  TitleHomePage,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <TitleHomePage>Welcome to the Phonebook app!</TitleHomePage>
      <HomePageSection>
        <div></div>
        <HomePageTextWrap>
          <TextHomePage>
            Here, you can conveniently store contacts and easily find the
            numbers you need. Say goodbye to misunderstandings with phone
            numbers – our Phonebook will always be by your side. Let's get
            started now. Add your contacts and enjoy the convenience of our app!
          </TextHomePage>
          <LinkHomePage>
            <StyledLinkHomePage to="/register">Sing up</StyledLinkHomePage>
            <StyledLinkHomePage to="/login">Log in</StyledLinkHomePage>
          </LinkHomePage>
        </HomePageTextWrap>
      </HomePageSection>
    </div>
  );
};

export default HomePage;
