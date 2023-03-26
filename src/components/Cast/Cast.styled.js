import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 180px;
  height: 225px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 15px;
`;

export const Item = styled.li`
  font-size: 16px;
  font-weight: 500;
  width: 180px;
`;

export const Des = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
