import styled from "@emotion/styled";

export const UserMenuWrap = styled.div`
display:flex;
align-items:center;
gap:20px;
font-size: 14px;
margin-left:auto;
@media screen and (min-width: 480px){ font-size: 16px;}
@media screen and (min-width: 480px){ font-size: 18px;}
 `

export const ButtonLogout = styled.button`
padding: 5px 5px;
color: inherit;
font-size: 12px;
  border: none;
  border-radius: 10px;
  background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
      }
      @media screen and (min-width: 480px){ 
        padding: 5px 10px;font-size: 16px;}

`