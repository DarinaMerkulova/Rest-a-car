import React from 'react';
import { TextHomePage, TitleHomePage } from './HomePage.styled';

const HomePage = () => {
  return (
    <div>
      <TitleHomePage>Welcome to the Phonebook app!</TitleHomePage>
      <TextHomePage>
         Here, you can conveniently store contacts
        and easily find the numbers you need. Say goodbye to misunderstandings
        with phone numbers – our Phonebook will always be by your side. Let's
        get started now. Add your contacts and enjoy the convenience of our
        app!"
      </TextHomePage>
    </div>
  );
};

export default HomePage;
