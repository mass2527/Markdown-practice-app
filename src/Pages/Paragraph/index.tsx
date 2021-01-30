import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';
import Result from 'Components/Shared/Result';

interface Props {}

const Paragraph: React.FC<Props> = () => {
  const md = new Remarkable();

  return (
    <S.Aside>
      <Example description="To create paragraphs, use a blank line to separate one or more lines of text. Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs. To create a line break (<br>), end a line with two or more spaces, and then type return.">
        I really like using Markdown.
        <br />
        <br />I think I'll use it to format all of my documents from now on.
      </Example>

      <Result>
        {ReactHtmlParser(md.render('I really like using Markdown.'))}
        {ReactHtmlParser(md.render("I think I'll use it to format all of my documents from now on."))}
      </Result>
    </S.Aside>
  );
};

export default Paragraph;
