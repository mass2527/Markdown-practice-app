import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Resizing>
      <S.Aside>
        <Example
          description={
            <>
              <h2>Why markdown?</h2>
              <br />
              No matter how great open source project you created, people don't know the value of your project if you
              don't explain it.
              <br />
              <br />
              With markdown, you can easily create your own document that decribes your project.
              <br />
              <br />
              Also people who are not using github, can write down something for memorizing purpose using{' '}
              <a href="https://typora.io/" target="_blank">
                markdown editor
              </a>
            </>
          }
        />
      </S.Aside>
    </Resizing>
  );
};

export default Home;
