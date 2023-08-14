import { MagnifyingGlass } from 'react-loader-spinner';
import { StyledLoader } from './LoaderMain.styled';


export const LoaderMain = () => {
  return (
    <StyledLoader>
      <MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = 'transparent'
  color = 'rgb(26, 127, 141)'
/>
    </StyledLoader>
  );
};