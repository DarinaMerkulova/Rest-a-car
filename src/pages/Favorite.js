import { Container } from 'components/App/App.styled';
import { SectionPage } from 'components/ContactForm/ContactForm.styled';
import CarList from 'components/ContactList/CarList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavouriteCars } from 'redux/reducers/favourite';

const Favorite = () => {
  const favouriteCars = useSelector(selectFavouriteCars);
  console.log(favouriteCars);
  return (
    <Container>
      <SectionPage>
        <CarList adverts={favouriteCars} />
      </SectionPage>
    </Container>
  );
};

export default Favorite;
