import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { S } from 'Styles/Shared/AppStyle';
import Nav from 'Components/Layout/Nav';
import Main from 'Components/Layout/Main';
import Heading from 'Pages/Heading';
import Paragraph from 'Pages/Paragraph';
import lineBreak from 'Pages/LineBreak';
import TextAttribute from 'Pages/TextAttribute';
import List from 'Pages/List';
import Image from 'Pages/Image';
import Link from 'Pages/Link';
import Blockquote from 'Pages/Blockquote';
import CodeBlock from 'Pages/CodeBlock';
import Table from 'Pages/Table';
import HeadingId from 'Pages/HeadingId';
import TaskList from 'Pages/TaskList';

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
            <Route exact path="/lineBreak" component={lineBreak} />
            <Route exact path="/textAttribute" component={TextAttribute} />
            <Route exact path="/list" component={List} />
            <Route exact path="/link" component={Link} />
            <Route exact path="/image" component={Image} />
            <Route exact path="/blockquote" component={Blockquote} />
            <Route exact path="/codeBlock" component={CodeBlock} />
            <Route exact path="/table" component={Table} />
            <Route exact path="/headingId" component={HeadingId} />
            <Route exact path="/taskList" component={TaskList} />
          </Switch>
          <Main />
        </S.AppBody>
      </S.App>
    </Router>
  );
}

export default App;
