import React from 'react';
import P from 'prop-types';
import { Title } from './styles';
export const Heading = ({
  children,
  lightMode = true,
  uppercase = false,
  as = 'h1',
  size = 'huge',
}) => {
  return (
    <Title lightMode={lightMode} uppercase={uppercase} as={as} size={size}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node,
  lightMode: P.bool,
  uppercase: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf(['huge', 'large', 'medium', 'small']),
};
