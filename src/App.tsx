import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { S } from 'Styles/Shared/AppStyle';
import Nav from 'Components/Layout/Nav';
import Main from 'Components/Layout/Main';
import Heading from 'Pages/Heading';
import Paragraph from 'Pages/Paragraph';
import lineBreaks from 'Pages/LineBreaks';
import TextAttributes from 'Pages/TextAttributes';
import List from 'Pages/List';
import Image from 'Pages/Image';
import Link from 'Pages/Link';
import Blockquotes from 'Pages/Blockquotes';
import CodeBlocks from 'Pages/CodeBlocks';
import Tables from 'Pages/Tables';
import HeadingId from 'Pages/HeadingId';

function App() {
  useEffect(() => {
    if (localStorage.getItem('asideWidth') && localStorage.getItem('editorHeight')) return;
    localStorage.setItem('asideWidth', '350');
    localStorage.setItem('editorHeight', '300');
  }, []);

  return (
    <Router>
      <S.App>
        <Nav />
        <S.AppBody>
          <Switch>
            <Route exact path="/heading" component={Heading} />
            <Route exact path="/paragraph" component={Paragraph} />
            <Route exact path="/lineBreaks" component={lineBreaks} />
            <Route exact path="/textAttributes" component={TextAttributes} />
            <Route exact path="/list" component={List} />
            <Route exact path="/link" component={Link} />
            <Route exact path="/image" component={Image} />
            <Route exact path="/blockquotes" component={Blockquotes} />
            <Route exact path="/codeBlocks" component={CodeBlocks} />
            <Route exact path="/tables" component={Tables} />
            <Route exact path="/headingId" component={HeadingId} />
          </Switch>
          <Main />
        </S.AppBody>
      </S.App>
    </Router>
  );
}

export default App;
