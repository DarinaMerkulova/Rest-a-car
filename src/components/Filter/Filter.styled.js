import styled from '@emotion/styled';

export const InputFind = styled.input`
  padding: 10px 20px;
  width: 230px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgba(26, 127, 141, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  color: rgb(238, 234, 234);

  @media screen and (min-width: 480px){ width: 260px;font-size: 16px;}
  @media screen and (min-width: 768px){ width: 340px;font-size: 16px;}
  `;

export const FindText = styled.p`
  font-size: 14px;

  @media screen and (min-width: 480px){font-size: 16px;}
 
`;
