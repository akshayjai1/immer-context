import React from 'react';
import { IContext } from './IContext';

export const withIContext = (Wrapper: any, _context_initialState?: any) => {
  return (props: any) => {
    return (
      <IContext _context_initialState={_context_initialState}>
        <Wrapper {...props}></Wrapper>
      </IContext>
    );
  };
};
