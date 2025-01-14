/**
 * Wait a given period before continuing execution.
 * @param duration - How many milliseconds to wait.
 * @returns Nothing
 */
export const sleep = (duration: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, duration));
};
