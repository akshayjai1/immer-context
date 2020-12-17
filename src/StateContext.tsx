import React, { createContext, useContext } from 'react';
import { useImmer } from './useImmer';
import { throwError } from './Util';
let ContextStore: any = {};
export const useIContext = (name: string): any => {
  const { Context, UpdateContext } = getContexts(name);
  const context = useContext(Context);
  const updateContext = useContext(UpdateContext);
  return { context, updateContext };
};

export const removeContext = (name: string) =>
  Reflect.deleteProperty(ContextStore, name);
function getContexts(name: string, context?: any, updateContext?: any) {
  if (typeof name !== 'string' || name.length === 0) {
    throwError(`please specify the name of iContext you wish to access`);
  }
  if (!updateContext) {
    if (!Reflect.has(ContextStore, name)) {
      throwError(`icontext with name = ${name} does not exist`);
    }
  } else {
    if (!ContextStore[name]) {
      const Context = createContext(context);
      const UpdateContext = createContext(updateContext);
      ContextStore[name] = {
        Context,
        UpdateContext,
      };
    } else {
      updateContext((state: any) => ({ ...state, ...context }));
    }
  }
  return ContextStore[name];
}
export interface IStateContext {
  contextName: string;
  initialContextValue: any;
  children: any;
}
export const StateContext = (props: IStateContext) => {
  const { initialContextValue, contextName, children } = props;
  const [state, setState] = useImmer(initialContextValue);
  const { Context, UpdateContext } = getContexts(contextName, state, setState);
  return (
    <Context.Provider value={{state}>
      <UpdateContext.Provider value={setState}>
        {children}
      </UpdateContext.Provider>
    </Context.Provider>
  );
};
