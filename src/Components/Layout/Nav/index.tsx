import React from 'react';
import styled from 'styled-components';
import Menu from 'Components/Shared/Menu';

const S = {
  Nav: styled.nav`
    height: 55px;
    border-bottom: 1px solid lightgray;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
};

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <S.Nav>
      <Menu />
    </S.Nav>
  );
};

export default Nav;
