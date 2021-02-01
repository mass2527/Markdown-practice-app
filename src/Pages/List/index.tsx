import React from 'react';
import { S } from 'Styles/Shared/AppStyle';
import Example from 'Components/Shared/Example';

interface Props {}

const List: React.FC<Props> = () => {
  return (
    <S.Aside>
      <Example
        title="Markdown"
        description="To create an ordered list, add line items with numbers followed by periods. "
      >
        1. First item
        <br />
        2. Second item
        <br />
        3. Third item
        <br />
        4. Fourth item
        <br />
        <br />
        - First item
        <br />
        - Second item
        <br />
        - Third item
        <br />- Fourth item
      </Example>

      <Example description="To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list." />

      <Example title="Rendered Output">
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
        <br />
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ul>
      </Example>

      <Example
        title="Best Practice"
        description="Markdown applications don’t agree on how to handle different delimiters in the same list. For compatibility, don’t mix and match delimiters in the same list — pick one and stick with it."
        goodExample={
          <>
            - First item
            <br />
            - Second item
            <br />
            - Third item
            <br />- Fourth item
          </>
        }
        badExample={
          <>
            + First item
            <br />
            * Second item
            <br />
            - Third item
            <br />+ Fourth item
          </>
        }
      />
    </S.Aside>
  );
};

export default List;
