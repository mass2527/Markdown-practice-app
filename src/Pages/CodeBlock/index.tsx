import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const CodeBlock: React.FC<Props> = () => {
  const text = "<pre><code>console.log('i love you')</code></pre>";

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Code Block"
          description="To create code blocks, indent every line of the block by at least four spaces or one tab."
        >
          <code>
            ```
            <br />
            console.log('i love you')
            <br />
            ````
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default CodeBlock;
