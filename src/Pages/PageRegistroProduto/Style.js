import styled from 'styled-components';

const Grid = styled.div`
display: flex;
width: 100%;

*:not(:last-child) {
  margin-right: 10px;
}
`;

const Button = styled.button`
  height: 40px;
  width: 100%;
  background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#888" : "#343a40"};
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;


export {
    Button,
    Grid
}