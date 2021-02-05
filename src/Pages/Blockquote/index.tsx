import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Blockquote: React.FC<Props> = () => {
  const text = `
  <code>
    <blockquote>Markdown is easy to learn.</blockquote>
    <br />
    <blockquote>
      Markdown is
      <blockquote>easy to learn.</blockquote>
    </blockquote>
  </code>
  `;

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Blockquote"
          description={
            <>
              <br />
              To create a blockquote, add a &gt; in front of a paragraph.
              <br />
              <br />
              Blockquotes can be nested. Add a &gt;&gt; in front of the paragraph you want to nest.
              <br />
              <br />
              Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to
              experiment to see which ones work.
            </>
          }
        >
          <code>
            &gt; Markdown is easy to learn.
            <br />
            <br />
            &gt; Markdown is
            <br />
            &gt;&gt; easy to learn.
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default Blockquote;
