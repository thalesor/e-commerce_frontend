import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  overflow-x: scroll;
`;

const BookBox = styled.div`
  width: 340px; 
  height: 439.55px;
  border-radius: 5px;
  position: relative;
  background: url(${(props) => props.cover}) no-repeat center center; 
  -webkit-background-size: fill;
  -moz-background-size: fill;
  -o-background-size: fill;
  background-size: fill;
`;

const PriceTag = styled.div`
  width: 80px;
  height: 80px;
  background-color: #000000;
  border-radius: 100%;
  color: #ffffff;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 30px;
  right: 30px;
`;


export {
    BookBox,
    Row,
    PriceTag
}