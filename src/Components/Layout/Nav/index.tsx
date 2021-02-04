import React from 'react';
import styled from 'styled-components';
import BasicMenu from 'Components/Shared/BasicMenu';
import ThemeMenu from 'Components/Shared/ThemeMenu';
import ExtendedMenu from 'Components/Shared/ExtendedMenu';

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

  Tutorials: styled.div`
    display: flex;
  `,
};

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <S.Nav>
      <S.Title>Markdown</S.Title>

      <ThemeMenu />

      <S.Tutorials>
        <BasicMenu />
        <ExtendedMenu />
      </S.Tutorials>
    </S.Nav>
  );
};

export default Nav;
