import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 8px 16px;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.63;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid grey;
  border-radius: 4px;
  border-color: orangered;
  color: black;
  background: #f5f4fa;
  box-shadow: rgb(164 156 156) 1px 1px 3px 1px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgba(63, 39, 30, 0.25);
    color: black;
  }
`;
export const MovieDiv = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const Title = styled.h1`
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Score = styled.p`
  margin-left: 24px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: 600;
`;

export const Overview = styled.h2`
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const TextOverview = styled.p`
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const Genres = styled.h3`
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const TextGenres = styled.p`
  margin-left: 24px;
  margin-bottom: 14px;
`;

export const AdditionalInfo = styled.div`
  margin-top: 14px;
  margin-bottom: 14px;
  margin-left: 8px;
  padding: 8px 0px;
`;

export const TitleAddition = styled.h3`
  margin-bottom: 14px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: 500;
  margin-right: 14px;
  text-decoration: underline;
  &:hover {
    color: orangered;
  }
  &.active {
    color: white;
    background-color: orangered;
  }
`;
