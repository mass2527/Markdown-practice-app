import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { S } from 'Styles/Shared/AppStyle';
import Nav from 'Components/Layout/Nav';
import Main from 'Components/Layout/Main';
import Heading from 'Pages/Heading';
import TextAttributes from 'Pages/TextAttributes';
import Paragraph from 'Pages/Paragraph';

function App() {
  return (
    <Router>
      <S.App>
        <Nav />
        <S.AppBody>
          <Switch>
            <Route exact path="/heading" component={Heading} />
            <Route exact path="/textAttributes" component={TextAttributes} />
            <Route exact path="/paragraph" component={Paragraph} />
          </Switch>
          <Main />
        </S.AppBody>
      </S.App>
    </Router>
  );
}

export default App;
