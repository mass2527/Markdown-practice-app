import React, { ReactNode } from 'react';
import styled from 'styled-components';

const S = {
  Example: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
  `,

  Title: styled.strong`
    font-size: 24px;
    margin-bottom: 10px;
  `,

  Div: styled.div`
    padding: 12px;
    border: 1px solid lightgray;
    box-sizing: border-box;
    margin: 10px 0px;
  `,

  Cases: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 25px 0px;
  `,

  Case: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    border: 1px solid lightgray;

    :first-child {
      border-right: 1px solid lightgray;
    }
  `,

  CaseTop: styled.div`
    height: 50px;
    padding: 12px;
    box-sizing: border-box;
    background-color: #e9ecef;
    border-bottom: lightgray;
    font-weight: bold;
  `,

  CaseBottom: styled.code`
    min-height: 100px;
    padding: 12px;
    box-sizing: border-box;
  `,
};

interface Props {
  title?: string;
  children?: ReactNode;
  description?: string | ReactNode;
  goodExample?: string | ReactNode;
  badExample?: string | ReactNode;
}

const Example: React.FC<Props> = ({ title, children, description, goodExample, badExample }) => {
  return (
    <S.Example>
      <S.Title>{title}</S.Title>
      {children && <S.Div>{children}</S.Div>}
      <p>{description}</p>
      {goodExample && badExample && (
        <S.Cases>
          <S.Case>
            <S.CaseTop>✅ Do this</S.CaseTop>
            <S.CaseBottom>{goodExample}</S.CaseBottom>
          </S.Case>
          <S.Case>
            <S.CaseTop>❌ Don't do this</S.CaseTop>
            <S.CaseBottom>{badExample}</S.CaseBottom>
          </S.Case>
        </S.Cases>
      )}
    </S.Example>
  );
};

export default Example;
