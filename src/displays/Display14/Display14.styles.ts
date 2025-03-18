import styled from "styled-components";

const Wrapper = styled.div`
  width: 800px;
  height: 280px;
  color: ${(p) => p.theme.colors.default};
  background: ${(p) => p.theme.colors.background};
`;

export default Wrapper;
