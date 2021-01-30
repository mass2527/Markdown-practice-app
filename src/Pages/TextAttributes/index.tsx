import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';
import Result from 'Components/Shared/Result';

interface Props {}

const TextAttributes: React.FC<Props> = () => {
  const md = new Remarkable();

  return (
    <S.Aside>
      <Example
        description="Markdown provides 6 heading styles. You can make biggest heading by using one # and smallest heading by using
          six #. Make sure # and literal have to be spaced."
      >
        *italic*
        <br />
        **bold**
        <br />
        ~~strikethrough~~
      </Example>

      <Result>
        {ReactHtmlParser(md.render('*italic*'))}
        {ReactHtmlParser(md.render('**bold**'))}
        {ReactHtmlParser(md.render('~~strikethrough~~'))}
      </Result>
    </S.Aside>
  );
};

export default TextAttributes;
