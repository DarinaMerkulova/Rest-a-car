import styled from '@emotion/styled';
import { Button, Form } from 'antd';
import Checkbox from 'antd/es/checkbox/Checkbox';


export const StyledContainerForm = styled.div`
@media screen and (min-width: 480px) {
    max-width: 250px;
    margin:30px auto;}

@media screen and (min-width: 768px) {
  max-width: 250px;
    margin: 80px auto;
}
@media screen and (min-width: 768px) {
  max-width: 400px;
margin:150px auto;}
`

export const Styledheckbox = styled(Checkbox)`
color:rgb(238, 234, 234);`

export const StyledFormLogin =styled(Form)`
color:rgb(238, 234, 234);`

export const StyledButtonForm = styled(Button)`
background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  width:100%;
  margin-bottom: 15px;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
  }`