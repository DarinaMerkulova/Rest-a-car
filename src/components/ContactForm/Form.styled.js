import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const FormField = styled.form`
  width:270px;
  margin: 80px auto;
  padding:10px;
  box-shadow: 0 0 7px rgb(26, 127, 141);
  font-size: 12px;
  
@media screen and (min-width: 480px) {
  width:350px;
  padding:20px;
  margin: 100px auto;
  font-size: 16px;
  }`


export const StyledTitleForm = styled.h2`
font-size: 12px;
text-align: center;
margin-bottom: 20px;
@media screen and (min-width: 480px) {font-size: 16px;}
@media screen and (min-width: 768px) {font-size: 18px;
  margin-bottom: 30px;}`

export const Input = styled.input`
  padding: 5px 10px;
  width: 250px;
  font-size: 12px;
  background-color: rgba(26, 127, 141, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  color: rgb(238, 234, 234);
  margin-bottom:10px;

  @media screen and (min-width: 480px){
  padding: 5px 10px;
  width: 330px;
  font-size: 16px;
 
  }
  @media screen and (min-width: 768px) {
    padding: 5px 20px;
  width: 310px;
  margin-bottom:20px;
  }
`;

export const FormLabel = styled.label`
display:block;
   margin-bottom:10px;
`;
export const LabelWrap = styled.div`
display: flex;
align-items: end;
gap: 5px;`

export const FormButton = styled.button`
display:block;
margin: 20px auto;
align-items:center;
  cursor: pointer;
  padding: 5px 15px;
  min-width: 100px;
  font-size: 12px;
  font-weight: 500;
  color: inherit;
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

  @media screen and (min-width: 480px){font-size: 14px;}
`;

export const ButtonWrap = styled.div`
display:flex;
justify-content:center;
align-items:center;
gap: 10px;
font-size: 12px;
@media screen and (min-width: 480px){font-size: 14px;}`


export const StyledLink = styled(NavLink)`
color: rgb(26, 127, 141);`