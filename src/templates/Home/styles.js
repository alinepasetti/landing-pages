import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
${({ background }) =>
  css`
  background: ${background};
  color: red;
  `}
`;
