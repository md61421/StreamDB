export const getItem = (key: string) => {
  try { return window.localStorage.getItem(key); } catch (e) { return null; }
};
