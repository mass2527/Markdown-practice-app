import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';

type ThemeState = {
  theme: string;
};

const ThemeStateContext = createContext<ThemeState | undefined>(undefined);

type Action = { type: 'CHANGE'; payload: string };

type ThemeDispatch = Dispatch<Action>;

const ThemeDispatchContext = createContext<ThemeDispatch | undefined>(undefined);

const themeReducer = (state: ThemeState, action: Action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        theme: action.payload,
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: localStorage.getItem('theme') || 'material',
  });

  return (
    <ThemeDispatchContext.Provider value={dispatch}>
      <ThemeStateContext.Provider value={state}>{children}</ThemeStateContext.Provider>
    </ThemeDispatchContext.Provider>
  );
};

export const useThemeState = () => {
  const state = useContext(ThemeStateContext);
  if (!state) throw new Error('ThemeProvider not found');
  return state;
};

export const useThemeDispatch = () => {
  const dispatch = useContext(ThemeDispatchContext);
  if (!dispatch) throw new Error('ThemeProvider not found');
  return dispatch;
};
