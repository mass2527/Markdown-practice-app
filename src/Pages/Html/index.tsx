import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Html: React.FC<Props> = () => {
  const text = `
  <img width="100" src="https://images.unsplash.com/photo-1612293905829-555c200ed7ed?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"/>
  <br/>
  <span style="color:#3498db">BLUE</span>
`;
  return (
    <Resizing>
      <S.Aside>
        <Example
          title="HTML"
          description={
            <>
              Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you
              prefer certain HTML tags to Markdown syntax.
              <br />
              <br />
              For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you
              need to change the attributes of an element, like specifying the color of text or changing the width of an
              image.
            </>
          }
        >
          <code>
            &lt;img width="100" src=""/&gt;
            <br />
            &lt;p style="color:blue"&gt;BLUE&lt;/p&gt;
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default Html;
