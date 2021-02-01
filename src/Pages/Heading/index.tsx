import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';

interface Props {}

const Heading: React.FC<Props> = () => {
  const md = new Remarkable();
  const text = `
  # Heading
  ## Heading
  ### Heading
  #### Heading
  ##### Heading
  ###### Heading
  `;

  return (
    <S.Aside>
      <Example
        title="Markdown"
        description="To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (<h3>), use three number signs."
      >
        <code>
          # Heading
          <br />
          ## Heading
          <br />
          ### Heading
          <br />
          #### Heading
          <br />
          ##### Heading
          <br />
          ###### Heading
        </code>
      </Example>
      <Example title="Rendered Output">{ReactHtmlParser(md.render(text))}</Example>

      <Example
        title="Best Practice"
        description="Markdown applications don’t agree on how to handle a missing space between the number signs (#) and the heading
      name. For compatibility, always put a space between the number signs and the heading name."
        goodExample="# Here's a Heading"
        badExample="#Here's a Heading"
      />
    </S.Aside>
  );
};

export default Heading;
