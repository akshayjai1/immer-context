import React, { createContext, useContext } from 'react';
import { useImmer } from './useImmer';

const context = createContext({});
const updateContext = createContext({});

export const useIContext = () => {
  return [useContext(context), useContext(updateContext)];
};
export const IContext = (props: any) => {
  const { _context_initialState } = props;
  const [state, setState] = useImmer(_context_initialState);
  return (
    <context.Provider value={state}>
      <updateContext.Provider value={setState}>
        {props.children}
      </updateContext.Provider>
    </context.Provider>
  );
};
