import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  color: #3c2f2f;
  line-height: 1em;
  font-family: "Sawarabi Mincho", sans-serif;
  font-size: 16px;
  font-weight: 400;
`;

Title.defaultProps = {
  context: null,
};

export default Title;

