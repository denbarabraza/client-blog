export const checkPathActive = (pathName: string, path: string) => {
  const isActive = pathName.replace(/ru(\/)?|en(\/)?/, '') === path;

  return isActive;
};
