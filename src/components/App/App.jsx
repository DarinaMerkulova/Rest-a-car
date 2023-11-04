import {

  HeaderContainer,
  HeaderWrapPage,
  Logo,
  StyledHeader,
  StyledNavLink,
  StyledNavigation,
} from './App.styled';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';



import { LoaderMain } from 'components/Loader/LoaderMain';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const CatalogePage = lazy(() => import('pages/Cataloge'));
const FavoritePage = lazy(() => import('pages/Favorite'));

export const App = () => {
 

  
  return (
    <div>
        <StyledHeader>
        <HeaderContainer>
          <StyledNavigation>
            <HeaderWrapPage>
              <Logo>Wave Drive</Logo>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/cataloge">Cataloge</StyledNavLink>
              <StyledNavLink to="/favorite">Favorite</StyledNavLink>
            </HeaderWrapPage>
          </StyledNavigation>
        </HeaderContainer>
      </StyledHeader>

      <main>
        <Suspense fallback={<LoaderMain />}>
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route path="/cataloge" element={<CatalogePage />} />
            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
