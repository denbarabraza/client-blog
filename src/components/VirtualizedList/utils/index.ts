import { defaultVisibleRange } from '@/components/VirtualizedList/config';
import { IGetVisibleRange } from '@/types';

export const getVisibleRangeMin = (
  sizes: number[],
  { offsetTop, scrollTop }: IGetVisibleRange,
) => {
  let sizeAcc = 0;

  for (let i = defaultVisibleRange.min; i < sizes.length; i++) {
    if (offsetTop + sizeAcc > scrollTop) {
      return Math.max(i - 1, 0);
    }
    sizeAcc += sizes[i];
  }

  return sizes.length - 1;
};

export const getVisibleRangeMax = (
  sizes: number[],
  { offsetTop, scrollTop, windowSize }: IGetVisibleRange,
) => {
  let sizeAcc = 0;

  for (let i = defaultVisibleRange.max; i < sizes.length; i++) {
    if (offsetTop + sizeAcc > scrollTop + windowSize) {
      return Math.min(i, sizes.length - 1);
    }

    sizeAcc += sizes[i];
  }

  return sizes.length - 1;
};

export const getVisibleRange = (sizes: number[], props: IGetVisibleRange) => {
  const min = getVisibleRangeMin(sizes, props);
  const max = getVisibleRangeMax(sizes, props);

  return { min, max };
};
