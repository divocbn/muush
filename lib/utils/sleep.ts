/**
 * Async function to sleep for `ms` amound of milliseconds.
 * @param ms - time to sleep in milliseconds
 * @returns `Promise<void>` after the sleep time has passed.
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
