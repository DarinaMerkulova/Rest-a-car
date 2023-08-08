import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: transparent;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  list-style: none;
`;

export const Item = styled.li`
  border-radius: 4px;
  background-color: transparent;
  box-shadow: 0 0 5px rgb(14, 82, 91);
  padding: 10px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  transition: background-color 0.3s ease, scale 0.3s ease;
  :hover {
    background-color: rgb(14, 82, 91);
    scale: 1.05;
  }
`;

export const Button = styled.button`
  padding: 4px 8px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  background-color: rgb(238, 234, 234);
  box-shadow: 0 0 5px rgb(14, 82, 91);
  border: none;
  transition: font-weight 0.3s ease;
  :hover {
    font-weight: 600;
  }
`;

export const Text = styled.p`
font-size:20px;
text-align: center;
`
