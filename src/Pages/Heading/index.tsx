import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';
import Result from 'Components/Shared/Result';
import BestPractice from 'Components/Shared/BestPractice';

interface Props {}

const Heading: React.FC<Props> = () => {
  const md = new Remarkable();
  const text = `
  # Heading 1
  ## Heading 2
  ### Heading 3
  #### Heading 4
  ##### Heading 5
  ###### Heading 6
  `;

  return (
    <S.Aside>
      <Example description="To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level three (<h3>), use three number signs.">
        # Heading 1<br />
        ## Heading 2<br />
        ### Heading 3<br />
        #### Heading 4<br />
        ##### Heading 5<br />
        ###### Heading 6
      </Example>

      <Result>{ReactHtmlParser(md.render(text))}</Result>
      <BestPractice goodExample="# Here's a Heading" badExample="#Here's a Heading">
        Markdown applications don’t agree on how to handle a missing space between the number signs (#) and the heading
        name. For compatibility, always put a space between the number signs and the heading name.
      </BestPractice>
    </S.Aside>
  );
};

export default Heading;
