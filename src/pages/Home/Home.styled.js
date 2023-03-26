import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  margin-bottom: 16px;
`;

export const List = styled.ul`
  margin-left: 24px;
`;

export const Item = styled.li`
  margin-bottom: 8px;
  font-size: 18px;
`;

export const Link = styled(NavLink)`
  color: black;
  &:hover {
    color: orangered;
  }
`;
