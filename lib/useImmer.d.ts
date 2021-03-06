import { Draft } from 'immer';
import { Dispatch } from 'react';
export declare type Reducer<S = any, A = any> = (draftState: Draft<S>, action: A) => void | S;
export declare type Updater<S> = (f: (draft: Draft<S>) => void | S) => void;
export declare type ImmerHook<S> = [S, Updater<S>];
export declare function useImmer<S = any>(initialValue: S | (() => S)): [S, Updater<S>];
export declare function useImmerReducer<S = any, A = any>(reducer: Reducer<S, A>, initialState: S, initialAction?: (initial: any) => S): [S, Dispatch<A>];
//# sourceMappingURL=useImmer.d.ts.map