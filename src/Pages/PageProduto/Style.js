import styled from 'styled-components';

const ProductContainer = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 30px;
    overflow-x: hidden;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
`;

const BookBox = styled.div`
  width: 340px;
  height: 439.55px;
  border-radius: 5px;
  background: url(${(props) => props.cover}) no-repeat center center; 
  -webkit-background-size: fill;
  -moz-background-size: fill;
  -o-background-size: fill;
  background-size: fill;
`;

const Title = styled.h4`
  font-size: 24px;
  color: #201f1f;
  margin-top: 10px;
  font-weight: 500;
  line-height: 1.2;
`

const Price = styled.span`
  font-size: 14px;
  color: #201f1f;
  font-weight: 500;
  margin-right: 7px;
`
const Span = styled.span`
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => (props.red ? "red" : "#606060")};
  margin-bottom: 0;
`






export {
    BookBox,
    Price,
    Span,
    ProductContainer,
    Title
}