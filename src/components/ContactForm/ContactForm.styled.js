import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const SectionPage = styled.section`
display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 30px auto;
  padding: 10px;
  background-color: rgba(14, 82, 91, 0.04);
  border-radius: 20px;
  box-shadow: 0 0 20px rgb(14, 82, 91);
  width: 270px;
  
  @media screen and (min-width: 480px){
    margin: 40px auto;
    gap: 40px;
    padding: 20px;
    width: 350px;

   }
   @media screen and (min-width: 768px){
    margin: 80px auto;
    padding: 40px;
    gap: 40px;
   }
  `
export const ContactsTitle = styled.h1`
font-size:16px;
@media screen and (min-width: 480px){font-size:18px;}
@media screen and (min-width: 768px){font-size:32px;}`

export const FormField = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;


@media screen and (min-width: 480px){gap: 30px;}
@media screen and (min-width: 768px){gap: 40px;}`


export const Input = styled(Field)`
  padding: 5px 15px;
  width: 240px;
  font-size: 12px;
  background-color: rgba(26, 127, 141, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  color: rgb(238, 234, 234);
  margin-top:10px;

  @media screen and (min-width: 480px){
    width: 270px;
    font-size: 16px};
  @media screen and (min-width: 768px){
    margin-top:0px;
    width: 200px;
    font-size: 16px}
`

export const FormLabel = styled.label`
  font-size: 12px;
  font-weight: 500;
   
  @media screen and (min-width: 480px)
  {
       font-size: 16px;}
   @media screen and (min-width: 768px) {display: flex;
  justify-content: space-between;
  align-items: center; 
  gap: 10px;
    font-size: 18px;
  }
`;

export const LabelWrap = styled.div`
display: flex;
align-items: end;
gap: 5px;`

export const FormButton = styled.button`
display: flex;
gap: 10px;
align-items:center;
justify-content:center;
margin: 0  auto;
  cursor: pointer;
  padding: 5px 10px;
  width: 150px;
  font-size: 12px;
  font-weight: 600;
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

  @media screen and (min-width: 480px){gap: 20px; width: 250px;font-size: 16px;padding: 5px 10px;}
`;