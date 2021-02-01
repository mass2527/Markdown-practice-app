import styled from 'styled-components';

export const S = {
  App: styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,

  AppBody: styled.div`
    height: calc(100vh - 55px);
    display: flex;
  `,

  Aside: styled.aside`
    flex: 0.3;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 350px;
    max-width: 500px;
    overflow-y: scroll;
    /* overflow-x: hidden; */

    ::-webkit-scrollbar {
      width: 5px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 15px;
      background-color: lightgray;
    }
  `,
};
