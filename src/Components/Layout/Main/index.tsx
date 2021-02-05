import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import marked from 'marked';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useThemeState } from 'store/ThemeContext';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/theme/duotone-light.css';
import 'codemirror/theme/paraiso-light.css';
import 'codemirror/theme/blackboard.css';
import { Resizable } from 're-resizable';
import markdownLogo from 'assets/markdownLogo.png';

const S = {
  Main: styled.main`
    flex: 1;
    width: 100px;
    border-left: 1px solid lightgray;
    display: flex;
    flex-direction: column;
  `,

  Result: styled.section`
    height: calc(100vh - 200px);
    padding: 24px;
    overflow-y: scroll;
    overflow-x: scroll;
    border-bottom: 1px solid lightgray;
  `,

  TextArea: styled.textarea`
    width: 100%;
    height: 200px;
    resize: none;
    padding: 16px;
    font-size: 16px;
    border-top: 1px solid lightgray;
    border-left: none;
    border-bottom: none;
    box-sizing: border-box;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;

    :focus {
      outline: none;
    }
  `,
};

interface Props {}

const Main: React.FC<Props> = () => {
  const { theme } = useThemeState();
  const [text, setText] = useState(localStorage.getItem('text') || ``);
  const html = {
    __html: marked(text),
  };

  useEffect(() => {
    localStorage.setItem('text', text);
  }, [text]);

  return (
    <S.Main>
      <S.Result dangerouslySetInnerHTML={html}></S.Result>

      <Resizable
        defaultSize={{
          width: 'auto',
          height: localStorage.getItem('editorHeight') || '250',
        }}
        minHeight={100}
        maxHeight={800}
        minWidth="auto"
        onResizeStop={(e, direction, ref, d) => {
          const currentHeight = Number(localStorage.getItem('editorHeight'));

          if (!currentHeight) return;
          localStorage.setItem('editorHeight', String(currentHeight + d.height));
        }}
      >
        <CodeMirror
          value={text}
          options={{
            mode: 'markdown',
            theme: `${theme}`,
            lineNumbers: true,
            autofocus: true,
            screenReaderLabel: 'code-editor',
          }}
          onBeforeChange={(editor, data, value) => {
            setText(value);
          }}
        />
      </Resizable>
    </S.Main>
  );
};

export default Main;
