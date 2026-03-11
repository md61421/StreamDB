export const throttle = <T extends (...args: unknown[]) => unknown>(fn: T, ms: number) => {
  let isThrottled = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!isThrottled) {
      fn.apply(this, args);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), ms);
    }
  };
};
