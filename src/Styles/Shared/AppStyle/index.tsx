import styled from 'styled-components';
import { Resizable } from 're-resizable';
import { ReactNode } from 'react';

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
    overflow-y: scroll;
    height: calc(100vh - 55px);

    ::-webkit-scrollbar {
      width: 3px;
    }
  `,
};

export const Resizing = ({ children }: { children: ReactNode }) => (
  <Resizable
    defaultSize={{
      width: localStorage.getItem('width') || '350',
      height: 'auto',
    }}
    minHeight="auto"
    minWidth={350}
    maxWidth="50vw"
    onResizeStop={(e, direction, ref, d) => {
      const currentWidth = Number(localStorage.getItem('width'));
      if (!currentWidth) return;

      localStorage.setItem('width', String(currentWidth + d.width));
    }}
  >
    {children}
  </Resizable>
);
