import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Image: React.FC<Props> = () => {
  const text = `
  ![girl with flower](https://images.unsplash.com/photo-1611615695859-21c4e8210341?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)
  ![girl with flower](https://images.unsplash.com/photo-1611615695859-21c4e8210341?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "girl with flower")
  [![girl with flower](https://images.unsplash.com/photo-1611615695859-21c4e8210341?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 "girl with flower")](https://unsplash.com)
  `;

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Markdown"
          description={
            <>
              To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the
              image asset in parentheses.
              <br />
              <br />
              You can optionally add a title after the URL in the parentheses. Let's grab some urls from {''}
              <a href="https://unsplash.com" target="_blank" rel="noreferrer">
                unsplash.com
              </a>{' '}
              and try it.
              <br />
              <br />
              To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in
              parentheses.
            </>
          }
        >
          <code>
            ![alt](url)
            <br />
            ![alt](url "title")
            <br />
            [![alt](imgurl "title")](linkurl)
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />

        <Example
          title="Best Practice"
          description="Markdown applications don’t agree on writing random name that is not related to image. Always make sure to write correct image name."
          goodExample={<>![name](url)</>}
          badExample={<>![abc](url)</>}
        />
      </S.Aside>
    </Resizing>
  );
};

export default Image;
