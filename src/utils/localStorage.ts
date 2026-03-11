export const getItem = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  try { return window.localStorage.getItem(key); } catch (_e) { return null; }
};
