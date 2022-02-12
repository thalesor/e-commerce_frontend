import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 20px;
  height: 439.55px;
  margin-bottom: 20px;
  overflow-x: scroll;
`;

const BookBox = styled.div`
  width: 340px;
  height: 439.55px;
  flex-shrink: 0;
  border: 1px solid gray;
  border-radius: 5px;
  position: relative;

  img {
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }
`;

const PriceTag = styled.div`
  width: 50px;
  height: 50px;
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