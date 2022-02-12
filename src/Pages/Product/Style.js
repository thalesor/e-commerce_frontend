import styled from 'styled-components';



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

const Span = styled.h3`
  color: #000000;
  align-self: flex-start;
  margin-top: 20px;
`





export {
    BookBox,
    Span
}