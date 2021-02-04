import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const TaskList: React.FC<Props> = () => {
  const text = `
  - [x] Write the press release
  - [ ] Update the website
  - [ ] Contact the media
  `;
  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Task List"
          description={
            <>
              Task lists allow you to create a list of items with checkboxes. In Markdown applications that support task
              lists, checkboxes will be displayed next to the content.
              <br />
              <br />
              To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To
              select a checkbox, add an x in between the brackets ([x]).
            </>
          }
        >
          <code>
            - [x] Write the press release
            <br />
            - [ ] Update the website
            <br />
            - [ ] Contact the media
            <br />
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default TaskList;
