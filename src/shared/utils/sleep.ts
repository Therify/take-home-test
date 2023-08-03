export const sleep = (duration = 1_000) =>
  new Promise((resolve) => setTimeout(resolve, duration));
