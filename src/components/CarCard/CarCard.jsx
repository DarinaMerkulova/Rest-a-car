import { Button } from 'components/Button/Button.styled';
import React from 'react';
import { CarImage, CarImageWrapper, CardInfoWrapper, CardItemInfo, CardListInfo, CardTitleName, CardTitleWrapper, Cardwrapper, FilledHeartSvg, HeartBtn, HeartSvg, ModelWrapper } from './CarCard.styled';
import { selectFavouriteCars, toggleFavouriteCar} from 'redux/reducers/favourite';
import { useDispatch, useSelector } from 'react-redux';

const CarCard = ({advert}) => {
  const dispatch = useDispatch();
  const favouriteCars = useSelector(selectFavouriteCars);
  const isFavourite = favouriteCars.some(car => car.id === advert.id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavouriteCar(advert));
  };

const location = advert.address.split(', ');
const city = location[1]
const country = location[2];
  return (
     <Cardwrapper>
      
       <HeartBtn onClick={handleToggleFavourite}>{isFavourite ? <FilledHeartSvg /> : <HeartSvg />}</HeartBtn>
      <CarImageWrapper>
        <CarImage src="https://loremflickr.com/640/480" alt="кіт" />
      </CarImageWrapper>
      <CardInfoWrapper>
      <CardTitleWrapper>
        <CardTitleName>{advert.make}, <ModelWrapper>{advert.model}</ModelWrapper>
        </CardTitleName>
        <p>{advert.rentalPrice}</p>
      </CardTitleWrapper>
      <CardListInfo>
        <CardItemInfo>{city}</CardItemInfo>
        <CardItemInfo>{country}</CardItemInfo>
        <CardItemInfo>{advert.rentalCompany}</CardItemInfo>
        </CardListInfo>
      <CardListInfo>
        <CardItemInfo>{advert.type}</CardItemInfo>
        <CardItemInfo>{advert.model}</CardItemInfo>
        <CardItemInfo>{advert.mileage}</CardItemInfo>
        <CardItemInfo>{advert.functionalities[0]}</CardItemInfo>
      </CardListInfo>
      </CardInfoWrapper>
      <Button className="learnMore">Learn More</Button>
    </Cardwrapper>
  );
};

export default CarCard;
