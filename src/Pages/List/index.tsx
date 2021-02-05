import React from 'react';
import { Resizing, S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const List: React.FC<Props> = () => {
  const text = `
  1. First item
  2. Second item
  3. Third item  
  <br/>
  <br/>
  - First item
  - Second item
  - Third item
  <br/>
  <br/>
  - first
	  - second
        - third
  `;

  return (
    <Resizing>
      <S.Aside>
        <Example
          title="List"
          description={
            <>
              <br />
              To create an ordered list, add line items with numbers followed by periods.
              <br />
              <br />
              To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items.
              Indent one or more items to create a nested list.
              <br />
              <br />
              To create a nested list, press tap key and then write. Keep in mind there must be at least one space
              between text and - sign.
            </>
          }
        >
          1. First item
          <br />
          2. Second item
          <br />
          3. Third item
          <br />
          <br />
          - First item
          <br />
          - Second item
          <br />- Third item
          <br />
          <br />
          - first
          <br />
          (tab)- second
          <br />
          (tab)(tab)- third
        </Example>

        <Example title="Rendered Output" text={text} />

        <Example
          title="Best Practice"
          description="Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don’t mix and match delimiters in the same list — pick one and stick with it."
          goodExample={
            <>
              - First item
              <br />
              - Second item
              <br />- Third item
            </>
          }
          badExample={
            <>
              + First item
              <br />
              * Second item
              <br />- Third item
            </>
          }
        />
      </S.Aside>
    </Resizing>
  );
};

export default List;
