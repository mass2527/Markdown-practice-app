import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import { Remarkable } from 'remarkable';
import ReactHtmlParser from 'react-html-parser';
import Example from 'Components/Shared/Example';
import Result from 'Components/Shared/Result';

interface Props {}

const Heading: React.FC<Props> = () => {
  const md = new Remarkable();

  return (
    <S.Aside>
      <Example description="To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For compatibility, always put a space between the number signs and the heading name.">
        # Heading 1<br />
        ## Heading 2<br />
        ### Heading 3<br />
        #### Heading 4<br />
        ##### Heading 5<br />
        ###### Heading 6
      </Example>

      <Result>
        {ReactHtmlParser(md.render('# Heading 1'))}
        {ReactHtmlParser(md.render('## Heading 2'))}
        {ReactHtmlParser(md.render('### Heading 3'))}
        {ReactHtmlParser(md.render('#### Heading 4'))}
        {ReactHtmlParser(md.render('##### Heading 5'))}
        {ReactHtmlParser(md.render('###### Heading 6'))}
      </Result>
    </S.Aside>
  );
};

export default Heading;
