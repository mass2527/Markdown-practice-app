import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';

interface Props {}

const Link: React.FC<Props> = () => {
  const md = new Remarkable();
  const text = `
  [Markdown](https://www.markdownguide.org)  
  [Markdown](https://www.markdownguide.org "Markdown")  
  <https://www.markdownguide.org>  
  <fake@example.com>
  `;

  return (
    <S.Aside>
      <Example
        title="Markdown"
        description="To create a link, enclose the link text in brackets [Markdown] and then follow it immediately with the URL in parentheses (https://www.markdownguide.org)."
      >
        <code>
          [name](url)
          <br />
          [name](url "title")
          <br />
          &lt;https://www.markdownguide.org&gt;
          <br />
          &lt;fake@example.com&gt;
        </code>
      </Example>

      <Example description="You can optionally add a title for a link. This will appear as a tooltip when the user hovers over the link. To add a title, enclose it in parentheses after the URL." />

      <Example description="To quickly turn a URL or email address into a link, enclose it in angle brackets." />

      <Example title="Rendered Output">{ReactHtmlParser(md.render(text))}</Example>

      <Example
        title="Best Practice"
        description="Markdown applications don’t agree on how to handle spaces in the middle of a URL. For compatibility, try to URL encode any spaces with %20."
        goodExample={<>[link](https://www.example.com/my%20page)</>}
        badExample={<>[link](https://www.example.com/my page)</>}
      />
    </S.Aside>
  );
};

export default Link;
