import React, { ReactNode } from 'react';
import styled from 'styled-components';

const S = {
  Example: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border-bottom: 1px solid lightgray;
    padding: 16px;
  `,

  Div: styled.div`
    padding: 12px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    font-family: monospace;
  `,

  Paragraph: styled.p`
    line-height: 20px;
  `,
};

interface Props {
  children: ReactNode;
  description: string;
}

const Example: React.FC<Props> = ({ children, description }) => {
  return (
    <S.Example>
      <h1>Markdown</h1>
      <S.Div>
        <S.Paragraph>{children}</S.Paragraph>
      </S.Div>
      <p>{description}</p>
    </S.Example>
  );
};

export default Example;
