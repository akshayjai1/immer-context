import produce, { Draft } from 'immer';
import { useState, useReducer, useCallback, useMemo, Dispatch } from 'react';

export type Reducer<S = any, A = any> = (
  draftState: Draft<S>,
  action: A
) => void | S;

export type Updater<S> = (f: (draft: Draft<S>) => void | S) => void;
export type ImmerHook<S> = [S, Updater<S>];

export function useImmer<S = any>(initialValue: S | (() => S)): [S, Updater<S>];

export function useImmer(initialValue: any) {
  const [val, updateValue] = useState(initialValue);
  return [
    val,
    useCallback((updater) => {
      updateValue(produce(updater));
    }, []),
  ];
}

export function useImmerReducer<S = any, A = any>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: (initial: any) => S
): [S, Dispatch<A>];

// TODO: find action type
export function useImmerReducer(
  reducer: Reducer,
  initialState: Draft<any>,
  initialAction: any
) {
  const cachedReducer = useMemo(() => produce(reducer), [reducer]);
  return useReducer(cachedReducer, initialState as any, initialAction);
}
