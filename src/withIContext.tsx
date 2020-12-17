import React, { useEffect } from 'react';
import { StateContext, removeContext } from './StateContext';
import { throwError } from './Util';

export interface withIContextInitials {
  initialValue?: any;
  name: string;
  shouldPersistContext?: boolean;
}
export const withIContext = (
  Wrapper: any,
  { initialValue, name, shouldPersistContext = false }: withIContextInitials
) => {
  if (typeof name !== 'string' || name.length === 0) {
    throwError(
      `You forgot to add name while initializing IContext for ${Wrapper}`
    );
  }
  return (props: any) => {
    useEffect(() => {
      return () => {
        if (!shouldPersistContext) removeContext(name);
      };
    });
    return (
      <StateContext initialContextValue={initialValue ?? {}} contextName={name}>
        <Wrapper {...props}></Wrapper>
      </StateContext>
    );
  };
};
