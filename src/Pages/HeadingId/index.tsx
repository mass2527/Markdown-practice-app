import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const HeadingId: React.FC<Props> = () => {
  const text = `
  [Move to the end](#end)

  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  
  <h1 id="end">end</h1>
  `;
  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Markdown"
          description={
            <>
              Every headings has their own id that is same with heading. For example if you write # medium, &lt;h1
              id='medium'&gt;medium&lt;h1&gt; is automatically generated.
              <br />
              <br />
              Since id is lower case, you shouln't use [Move to the End](#End)
              <br />
              <br />
              If there's space in heading, replace it with -
              <br />
              For example, [link](#i-am)
              <br /> # i am
              <br />
              <br />
              Heading id is really useful when you make index. Use this to make your reader easily find the content.
            </>
          }
        >
          <code>
            [Move to the End](#end)
            <br /># end
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default HeadingId;
