import * as Styled from './styles';
import P from 'prop-types';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <Styled.Container aria-label="Main Menu">
      {links.map((link) => (
        <MenuLink key={link.children} link={link.link}>
          {link.children}
        </MenuLink>
      ))}
    </Styled.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
