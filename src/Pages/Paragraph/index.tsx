import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Paragraph: React.FC<Props> = () => {
  const text = `
  I really like using Markdown.  
  <br/>
  I think I'll use it to format all of my documents from now on.`;

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Paragraph"
          description={
            <>
              <br />
              To create paragraphs, use a blank line to separate one or more lines of text.
            </>
          }
        >
          <code>
            I really like using Markdown.
            <br />
            <br />I think I'll use it to format all of my documents from now on.
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />

        <Example
          title="Best Practice"
          description="Unless the paragraph is in a list, don’t indent paragraphs with spaces or tabs."
          goodExample="Don't put tabs or spaces in front of your paragraphs. Keep lines left-aligned like this."
          badExample={
            <>
              &nbsp;&nbsp;&nbsp;&nbsp;This can result in unexpected formatting problems. &nbsp;&nbsp;Don't add tabs or
              spaces in front of paragraphs.
            </>
          }
        />
      </S.Aside>
    </Resizing>
  );
};

export default Paragraph;
