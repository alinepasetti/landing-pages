import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`font-size: ${theme.fonts.sizes.medium};`,
  medium: (theme) => css`font-size: ${theme.fonts.sizes.large};`,
  large: (theme) => css`font-size: ${theme.fonts.sizes.xlarge};`,
  huge: (theme) => css`
  font-size: ${theme.fonts.sizes.xhuge};
  ${mediaFont(theme)}`,
};

const mediaFont = (theme) => css`
  @media ${theme.media.medium} {
    font-size: ${theme.fonts.sizes.xlarge};
  }`;

export const Title = styled.h1`
 ${({ theme, lightMode, uppercase, size }) => css`
 color: ${lightMode ? theme.colors.white : theme.colors.secondaryColor};
 text-transform: ${uppercase ? 'uppercase' : 'none'};
 ${titleSize[size](theme)}
 `}
`;
