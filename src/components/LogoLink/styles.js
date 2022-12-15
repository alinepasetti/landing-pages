import styled, { css } from 'styled-components';

export const Container = styled.a` ${({ theme }) => css`
color: black;
text-decoration: none;
display: flex;
align-items: center;


> img {
  max-height: 3.5rem;
}
`}`;
