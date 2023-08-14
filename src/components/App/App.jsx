import {
  Container,
  HeaderContainer,
  HeaderWrapPage,
  HeaderWrapRegistration,
  StyledHeader,
  StyledNavLink,
  StyledNavigation,
} from './App.styled';
import { lazy, useEffect } from 'react';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { selectAuthentificated, selectToken } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/operations';
import UserMenu from 'components/UserManu/UserMenu';
import PrivateRoute from 'components/PrivateRoute';
import ParticlesLines from 'components/ParticlesLines';
import { LoaderMain } from 'components/Loader/LoaderMain';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const authentificated = useSelector(selectAuthentificated);

  useEffect(() => {
    if (!token || authentificated) return;

    dispatch(refreshUserThunk());
  }, [token, dispatch, authentificated]);

  return (
    <Container>
      <ParticlesLines />
      <StyledHeader>
        <HeaderContainer>
          <StyledNavigation>
            <HeaderWrapPage>
              <StyledNavLink to="/">Home</StyledNavLink>
              {authentificated && (
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              )}
            </HeaderWrapPage>

            {authentificated ? (
              <UserMenu />
            ) : (
              <HeaderWrapRegistration>
                <StyledNavLink to="/login">Login</StyledNavLink>
                <StyledNavLink to="/register">Register</StyledNavLink>
              </HeaderWrapRegistration>
            )}
          </StyledNavigation>
        </HeaderContainer>
      </StyledHeader>

      <main>
        <Suspense fallback={<LoaderMain />}>
          <Routes>
            <Route path="/" element={<HomePage />} index />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};
