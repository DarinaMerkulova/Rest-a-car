import { Button } from 'components/Button/Button.styled';
import React from 'react';
import { CarImage, CarImageWrapper, CardInfoWrapper, CardItemInfo, CardListInfo, CardTitleName, CardTitleWrapper, Cardwrapper, ModelWrapper } from './CarCard.styled';

const CarCard = ({advert}) => {
  console.log(advert)

  return (
    <Cardwrapper>
      <CarImageWrapper>
        <CarImage src="https://loremflickr.com/640/480" alt="кіт" />
      </CarImageWrapper>
      <CardInfoWrapper>
      <CardTitleWrapper>
        <CardTitleName>
        <ModelWrapper>hjhgh</ModelWrapper>,
        </CardTitleName>
        <p>$40</p>
      </CardTitleWrapper>
      <CardListInfo>
        <CardItemInfo>Kiev</CardItemInfo>
        <CardItemInfo>Ukraine</CardItemInfo>
        <CardItemInfo>Luxury</CardItemInfo>
        <CardItemInfo>Premium</CardItemInfo>
      </CardListInfo>
      <CardListInfo>
        <CardItemInfo>Sun</CardItemInfo>
        <CardItemInfo>Eklave</CardItemInfo>
        <CardItemInfo>9558</CardItemInfo>
        <CardItemInfo>Power liftgefge</CardItemInfo>
      </CardListInfo>
      </CardInfoWrapper>
      <Button className="learnMore">Learn More</Button>
    </Cardwrapper>
  );
};

export default CarCard;
