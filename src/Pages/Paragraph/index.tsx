import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';
import Result from 'Components/Shared/Result';
import BestPractice from 'Components/Shared/BestPractice';

interface Props {}

const Paragraph: React.FC<Props> = () => {
  const md = new Remarkable();
  const text = `
  I really like using Markdown.


  
  I think I'll use it to format all of my documents from now on.
  `;
  const goodExample = `
  Don't put tabs or spaces in front of your paragraphs.  
  Keep lines left-aligned like this.
  `;
  const badExample = `
  This can result in unexpected formatting problems.

  Don't add tabs or spaces in front of paragraphs.
  `;

  return (
    <S.Aside>
      <Example description="To create paragraphs, use a blank line to separate one or more lines of text.">
        I really like using Markdown.
        <br />
        <br />I think I'll use it to format all of my documents from now on.
      </Example>

      <Result>{ReactHtmlParser(md.render(text))}</Result>
      <BestPractice goodExample={goodExample} badExample={badExample}>
        Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs.
      </BestPractice>
    </S.Aside>
  );
};

export default Paragraph;
