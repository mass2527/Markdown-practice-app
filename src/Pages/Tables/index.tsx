import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const Tables: React.FC<Props> = () => {
  const text = `
  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |
  | hello | name |  

  <br/>

  | Syntax | Description | Test Text |
| :--- | :----: | ---: |
| Header | Title | Here's this |
| Paragraph | Text | And more |  

  `;
  return (
    <Resizing>
      <S.Aside>
        <Example
          title="Markdown"
          description={
            <>
              To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to
              separate each column. You can optionally add pipes on either end of the table.
              <br />
              <br />
              You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right,
              or on both side of the hyphens within the header row.
            </>
          }
        >
          <code>
            | Syntax | Description |<br /> | ----------- | ----------- |<br /> | Header | Title |<br /> | Paragraph |
            Text |
            <br />
            <br />| Syntax | Description | Test Text |<br /> | :--- | :----: | ---: |<br /> | Header | Title | Here's
            this |<br /> | Paragraph | Text | And more |
          </code>
        </Example>

        <Example title="Rendered Output" text={text} />
      </S.Aside>
    </Resizing>
  );
};

export default Tables;
