import React, { useState } from 'react';
import styled from 'styled-components';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';

const S = {
  Main: styled.main`
    flex: 1;
    border-left: 1px solid lightgray;
    display: flex;
    flex-direction: column;
  `,

  Result: styled.div`
    height: calc(100vh - 200px);
    padding: 24px;
    overflow-y: scroll;
  `,

  TextArea: styled.textarea`
    width: 100%;
    height: 200px;
    resize: none;
    padding: 16px;
    box-sizing: border-box;
    font-family: monospace;

    :focus {
      outline: none;
    }
  `,
};

interface Props {}

const Main: React.FC<Props> = () => {
  const md = new Remarkable();
  const [text, setText] = useState('');

  return (
    <S.Main>
      {console.log(text)}
      <S.Result>{ReactHtmlParser(md.render(text))}</S.Result>
      <S.TextArea onChange={(e) => setText(e.target.value)} placeholder="Enter some markdown">
        {' '}
      </S.TextArea>
    </S.Main>
  );
};

export default Main;
