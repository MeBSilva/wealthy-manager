export const createDelayInMiliseconds = (delay: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
