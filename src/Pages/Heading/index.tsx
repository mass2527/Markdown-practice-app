import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Heading: React.FC<Props> = () => {
  const text = `
  # H1
  ***
  ## H2
  ### H3
  #### H4
  ##### H5
  ###### H6

  H1
  ===
  ***
  H2
  ---
  `;

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Markdown"
          description={
            <>
              To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use
              should correspond to the heading level. For example, to create a heading level three (&lt;h3&gt;), use
              three number signs.
              <br />
              <br />
              Alternatively, on the line below the text, add any number of = characters for heading level 1 or -
              characters for heading level 2.
            </>
          }
        >
          <code>
            # H1
            <br />
            ## H2
            <br />
            ### H3
            <br />
            #### H4
            <br />
            ##### H5
            <br />
            ###### H6
            <br />
            H1
            <br />
            ===
            <br />
            H2
            <br />
            ---
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />

        <Example
          title="Best Practice"
          description="Markdown applications don’t agree on how to handle a missing space between the number signs (#) and the heading
      name. For compatibility, always put a space between the number signs and the heading name."
          goodExample="# Here's a Heading"
          badExample="#Here's a Heading"
        />
      </S.Aside>
    </Resizing>
  );
};

export default Heading;
