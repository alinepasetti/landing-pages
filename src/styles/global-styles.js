import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  /* this allows us to manage rem measure as if it was pixels */
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  ${({ theme }) => css`
  background: ${theme.colors.mainColor};
  font-family: ${theme.fonts.default};
`}
}

h1, h2, h3, h4, h5, h6 {
  ${({ theme }) => css`
  font-family: ${theme.fonts.secondary};
`}
}
`;
