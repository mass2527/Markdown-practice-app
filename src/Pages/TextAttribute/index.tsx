import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const TextAttribute: React.FC<Props> = () => {
  const text = `
  *italic*  
  **bold**  
  ***bold and italic***  
  ~~strikethrough~~
  `;
  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Text Attribute"
          description={
            <>
              <br />
              To italicize text, add one asterisk or underscore before and after a word or phrase without spaces around
              the letters.
              <br />
              <br />
              To bold text, add two asterisks or underscore before and after a word or phrase without spaces arond the
              letters.
              <br />
              <br />
              To emphasize text with bold and italics at the same time, add three asterisks or underscore before and
              after a word or phrase without spaces around the letters.
            </>
          }
        >
          <code>
            *italic*
            <br />
            **bold**
            <br />
            ***bold and italic***
            <br />
            ~~strikethrough~~
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />

        <Example
          title="Best Practice"
          description="Markdown applications don’t agree on how to handle underscores in the middle of a word. For compatibility, use asterisks to bold the middle of a word for emphasis."
          goodExample={<>This is really**very**important text.</>}
          badExample={<>This is really__very__important text.</>}
        />
      </S.Aside>
    </Resizing>
  );
};

export default TextAttribute;
