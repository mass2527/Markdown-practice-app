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

  Result: styled.div`
    height: calc(100vh - 200px);
    padding: 24px;
    overflow-y: scroll;
    overflow-x: scroll;
    border-bottom: 1px solid lightgray;asf
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
  const [text, setText] = useState(
    localStorage.getItem('text') ||
      `<center><br/><br/><img src=${markdownLogo}  /><h1>Thank you for visting here <img src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966" width="40" /></h1><p>This website was created to help people learning markdown</p><br/><p>Desciption here is based on <a href="https://www.markdownguide.org" target="_blank" >https://www.markdownguide.org</a></p><br/><p>Hope this will be helpful for all of you</p><br/><a href="https://www.linkedin.com/in/dh-kim-733227200/" target="_blank"><img src="https://camo.githubusercontent.com/93ca47e21e17f622a41d26d599e008e4c30b8a322186f18019bc43d54f57b0c9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e6b6564496e2d3065373661383f7374796c653d666c61742d737175617265266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465"/><a/></center>`
  );
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
