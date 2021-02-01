import React from 'react';
import styled from 'styled-components';
import Menu from 'Components/Shared/Menu';
import { useLocation } from 'react-router-dom';

const S = {
  Nav: styled.nav`
    height: 55px;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Title: styled.h1`
    margin-left: 16px;
  `,
};

interface Props {}

const Nav: React.FC<Props> = () => {
  const location = useLocation();
  const currentLocation = location.pathname
    .slice(1)
    .replace(/([A-Z]+)/g, ',$1')
    .replace(',', ' ')
    .toLowerCase();

  return (
    <S.Nav>
      <S.Title>{currentLocation.toUpperCase()[0] + currentLocation.slice(1)}</S.Title>
      <Menu />
    </S.Nav>
  );
};

export default Nav;
