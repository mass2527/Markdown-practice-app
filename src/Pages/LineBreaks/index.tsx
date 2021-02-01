import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';

interface Props {}

const LineBreaks: React.FC<Props> = () => {
  const md = new Remarkable();
  const text = `
  This is the first line.  
  And this is the second line.  
  
  ***
  
  
  `;

  return (
    <S.Aside>
      <Example
        title="Markdown"
        description="To create a line break (<br>), end a line with two or more spaces, and then type return."
      >
        <code>
          This is the first line.
          <br /> And this is the second line.
          <br />
          <br />
          ***
        </code>
      </Example>

      <Example description="To create a horizontal rule, use three or more asterisks (***), dashes (---), or underscores (___) on a line by themselves." />

      <Example title="Rendered Output">{ReactHtmlParser(md.render(text))}</Example>

      <Example
        title="Best Practice"
        description="For compatibility, put blank lines before and after horizontal rules since putting equal sign or dashes right below the line is alterative syntax of making heading"
        goodExample={
          <>
            Try to put a blank line before... <br />
            <br /> --- <br />
            <br /> ...and after a horizontal rule.
          </>
        }
        badExample={
          <>
            Without blank lines, this would be a heading. <br /> --- <br /> Don't do this!
          </>
        }
      />
    </S.Aside>
  );
};

export default LineBreaks;
