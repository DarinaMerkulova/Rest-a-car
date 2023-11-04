
// import { List, Item, Text } from './ContactList.styled';


import CarCard from 'components/CarCard/CarCard';
import { CardListWrapper } from './CarList.styled';

// import { Loader } from 'components/Loader/Loader';


// Компонент списка контактов
const CarList = ({adverts}) => {
 
  return (
     <CardListWrapper>
        {adverts.map(advert => (
        <CarCard
          key={advert.id}
          advert={advert}
           />
      ))}
      </CardListWrapper>)
}
  
 
export default CarList;
