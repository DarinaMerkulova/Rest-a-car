import React from 'react'
import MultipleSelectPlaceholder from './CurrencySelect'
import { InputAdornmentsEnd, InputAdornmentsStart } from './InputFrom'
import { CarMileageFilter, FilterWrap } from './FilterCar.styled'
import { Button } from 'components/Button/Button.styled'
import { InputName } from 'components/Select/Select.styled'



const FilterCar = () => {
  return (
    <FilterWrap>
      <InputName/>
      <MultipleSelectPlaceholder/>
      <CarMileageFilter>
      <InputAdornmentsStart/>
      <InputAdornmentsEnd/>
      </CarMileageFilter>
      <Button>Search</Button>
    </FilterWrap>
  )
}

export default FilterCar
