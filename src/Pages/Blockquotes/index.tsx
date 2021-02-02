import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Blockquotes: React.FC<Props> = () => {
  return (
    <S.Aside>
      <Example title="Markdown" description="To create a blockquote, add a > in front of a paragraph.">
        <code>&gt; Dorothy followed her through many of the beautiful rooms in her castle.</code>
      </Example>

      <Example description="To bold text, add two asterisks before and after a word or phrase without spaces arond the letters." />

      <Example
        description="To emphasize text with bold and italics at the same time, add three asterisks before and after a word or phrase
        without spaces around the letters."
      />

      <Example title="Rendered Output">
        <em>italic</em>
        <br />
        <strong>bold</strong>
        <br />
        <strong>
          <em>bold and italic</em>
        </strong>
        <br />
        ~~strikethrough~~
      </Example>

      <Example
        title="Best Practice"
        description="You can use underscore instead of asterisk to bold or italicize text. However, For compatibility, use asterisks to style the middle of a word for emphasis."
        goodExample={<>This is really***very***important text.</>}
        badExample={<>This is really___very___important text.</>}
      />
    </S.Aside>
  );
};

export default Blockquotes;
