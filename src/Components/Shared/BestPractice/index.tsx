import React, { ReactNode } from 'react';
import styled from 'styled-components';

const S = {
  BestPractice: styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    box-sizing: border-box;
  `,

  Title: styled.strong`
    font-size: 24px;
  `,

  Description: styled.p`
    margin: 10px 0px;
  `,

  Div: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
  `,

  Example: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;

    :first-child {
      border-right: 1px solid lightgray;
    }
  `,

  ExampleTop: styled.div`
    height: 50px;
    padding: 12px;
    box-sizing: border-box;
    background-color: #e9ecef;
    border-bottom: lightgray;
    font-weight: bold;
  `,

  ExampleBottom: styled.div`
    height: 170px;
    padding: 12px;
    box-sizing: border-box;
    font-family: monospace;
  `,
};

interface Props {
  children: ReactNode;
  goodExample: string;
  badExample: string;
}

const BestPractice: React.FC<Props> = ({ children, goodExample, badExample }) => {
  return (
    <S.BestPractice>
      <S.Title>Best Practice</S.Title>
      <S.Description>{children}</S.Description>
      <S.Div>
        <S.Example>
          <S.ExampleTop>✅ Do this</S.ExampleTop>
          <S.ExampleBottom>{goodExample}</S.ExampleBottom>
        </S.Example>
        <S.Example>
          <S.ExampleTop>❌ Don't do this</S.ExampleTop>
          <S.ExampleBottom>{badExample}</S.ExampleBottom>
        </S.Example>
      </S.Div>
    </S.BestPractice>
  );
};

export default BestPractice;
