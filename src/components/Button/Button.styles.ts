import styled from "styled-components";

const Wrapper = styled.button`
  margin: 0;
  padding: 0;

  font: inherit;

  color: ${(p) => p.theme.colors.default};
  background: none;
  border: none;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &:active {
    &:not(:disabled) {
      color: ${(p) => p.theme.colors.primary};
    }
  }
`;

export default Wrapper;
