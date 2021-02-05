import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';
import markdownLogo from 'assets/markdownLogo.png';

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <Resizing>
      <S.Aside>
        <Example
          description={
            <>
              <img src={markdownLogo} alt="markdown-logo" />
              <h1>
                Thanks for visiting{' '}
                <img
                  alt="gretting"
                  src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                  width="40"
                />
              </h1>
              <p>✨ Learn Markdown here, write everywhere</p>
              <p>
                ⭐ Desciption here is based on{' '}
                <a href="https://www.markdownguide.org" target="_blank" rel="noreferrer">
                  https://www.markdownguide.org "
                </a>
              </p>
              <p>🥰 Hope this will be helpful for all of you</p>
              <p>
                💬 Tell me what was great and what was bad{' '}
                <a href="https://www.linkedin.com/in/dh-kim-733227200/" target="_blank" rel="noreferrer">
                  <img
                    alt="linkedin-link"
                    src="https://camo.githubusercontent.com/93ca47e21e17f622a41d26d599e008e4c30b8a322186f18019bc43d54f57b0c9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d4c696e6b6564496e2d3065373661383f7374796c653d666c61742d737175617265266c6f676f3d4c696e6b6564696e266c6f676f436f6c6f723d7768697465"
                  />
                </a>
              </p>
              <br />
              <h2>Why markdown?</h2>
              <p>
                No matter how great open source project you created, people don't know the value of your project if you
                don't explain it.
              </p>
              <br />
              <p>With markdown, you can easily create your own document that decribes your project.</p>
              <br />
              <p>
                Also people who are not using github, can write down something for memorizing purpose using{' '}
                <a href="https://typora.io/" target="_blank" rel="noreferrer">
                  markdown editor
                </a>
              </p>
              <br />
              <h2>Available options</h2>
              <ul>
                <li>You can select your editor theme</li>
                <li>Editor height and this sidebar is resizable</li>
              </ul>
              <br />
              <br />
            </>
          }
        />
      </S.Aside>
    </Resizing>
  );
};

export default Home;
