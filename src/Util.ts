export const throwError = (message: string) => {
  throw new Error(`[immer-context] ${message}`);
};
