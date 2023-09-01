export const throttle = <TProps extends unknown>(
  callback: (props: TProps) => void,
  time: number,
) => {
  let throttlePause = false;

  return (props: TProps): void => {
    if (throttlePause) return;
    throttlePause = true;

    setTimeout(() => {
      callback(props);

      throttlePause = false;
    }, time);
  };
};
