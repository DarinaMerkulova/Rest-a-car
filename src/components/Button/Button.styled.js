import styled from "@emotion/styled";

export const Button = styled.button`
background-color: rgb(26, 127, 141);
  box-shadow: 0 0 7px rgb(26, 127, 141);
  padding: 14px 44px;
border-radius: 12px;
border:none;
color:inherit;
font-size:14px;
cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  :hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(14, 82, 91);
  }
  &.learnMore{
   width:274px;
 }
  `


// display:block;
// background-color:#3470FF;
// color:#FFFFFF;
// padding: 14px 44px;
// border-radius: 12px;
// border:none;
// cursor: pointer;
// transition: background-color 0.3s ease;
//  :hover {
//     background-color:#0B44CD;
// }
//  &.learnMore{
//     width:274px;
//  }
