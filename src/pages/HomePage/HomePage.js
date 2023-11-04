import React, { useEffect } from 'react';
import {
    
} from './HomePage.styled';
import HeroSection from 'components/HomePage/HeroSection/HeroSection';
import { useDispatch, useSelector} from 'react-redux';
import { selectCars } from 'redux/selectors';
import { getCarThunk } from 'redux/operations';



const HomePage = () => {

  const cars = useSelector(selectCars)
  const dispatch = useDispatch();
  useEffect(()=> {dispatch(getCarThunk())},[dispatch ])
 console.log(cars)

  return (
    <div>
     <HeroSection/>

    </div>
  );
};

export default HomePage;
