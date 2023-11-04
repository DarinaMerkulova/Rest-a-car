import { Container } from 'components/App/App.styled'
import { SectionPage } from 'components/ContactForm/ContactForm.styled'
import CarList from 'components/ContactList/CarList'
import FilterCar from 'components/FilterCar/FilterCar'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCarThunk } from 'redux/operations'
import { selectCars } from 'redux/selectors'



const Cataloge = () => {
  const dispatch = useDispatch  ();
const adverts =useSelector(selectCars)

  useEffect(() => {
      dispatch(getCarThunk());
  }, [dispatch]);

  return (
    <Container>
      <FilterCar/>
        <SectionPage>
         <CarList adverts={adverts}/>
       </SectionPage>
    </Container>)}



export default Cataloge
