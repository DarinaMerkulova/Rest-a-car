import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/operations';
import { selectUserData } from 'redux/selectors';
import { ButtonLogout, UserMenuWrap } from './UserMenu.styled';

const UserMenu = () => {
  const profile = useSelector(selectUserData);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };
  return (
    <UserMenuWrap>
      <p>{profile.name}</p>
      <ButtonLogout onClick={handleLogOut} >Log Out</ButtonLogout>
    </UserMenuWrap>
  );
};

export default UserMenu;
