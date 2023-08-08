import { FindText, InputFind } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/reducers/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <FindText>Find contacts by name</FindText>

      <InputFind
        type="text"
        name="filter"
        placeholder='Serch by name'
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};
