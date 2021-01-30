import React, { ReactNode } from 'react';
import styled from 'styled-components';

const S = {
  Result: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  `,

  Paragraph: styled.p`
    padding: 16px;
  `,
};

interface Props {
  children: ReactNode;
}

const Result: React.FC<Props> = ({ children }) => {
  return (
    <S.Result>
      <h1>Rendered Output</h1>
      <S.Paragraph>{children}</S.Paragraph>
    </S.Result>
  );
};

export default Result;
