export const throttle = (fn: Function, ms: number) => {
  let isThrottled = false;
  return function (this: any, ...args: any[]) {
    if (!isThrottled) {
      fn.apply(this, args);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), ms);
    }
  };
};
