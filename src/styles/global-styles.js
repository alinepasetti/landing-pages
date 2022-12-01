import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
* {
  margin: 0;
  padding: 0;
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

h1 {
  ${({ theme }) => css`
  font-family: ${theme.fonts.secondary};
`}
}
`;
