import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
  padding: 16px 4px;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Button = styled.button`
  padding: 8px;
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
