import React, { ReactNode } from 'react';
import styled from 'styled-components';

const S = {
  Result: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  `,

  Strong: styled.strong`
    text-align: center;
    font-size: 24px;
  `,

  Div: styled.div`
    padding: 12px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    margin: 10px 0px;
  `,
};

interface Props {
  children: ReactNode;
}

const Result: React.FC<Props> = ({ children }) => {
  return (
    <S.Result>
      <S.Strong>Rendered Output</S.Strong>
      <S.Div>{children}</S.Div>
    </S.Result>
  );
};

export default Result;
