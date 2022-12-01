import React from 'react';
import P from 'prop-types';
import { Title } from './styles';
export const Heading = ({ children, light = true }) => {
  return <Title light={light}>{children}</Title>;
};

Heading.propTypes = {
  children: P.node,
  light: P.bool,
};
