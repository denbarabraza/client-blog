import React, { useEffect, useMemo, useRef } from 'react';

import { throttle } from '@/utils/throtlle';

/*
 * Хук useSize для отслеживания размеров элементов DOM. Он использует ResizeObserver для отслеживания изменений размеров элемента и вызывает колбэк-функцию callback с новыми значениями ширины и высоты.
 * Функция throttle используется для ограничения частоты вызовов колбэка при изменении размеров элементов.
 * */

export const useSize = <T extends HTMLElement>(
  callback: (props: { width: number; height: number }) => void,
  throttleMs = 10,
): React.RefObject<T> => {
  const elementRef = useRef<T>(null);

  const throttleResize = useMemo(
    () => throttle(callback, throttleMs),
    [throttleMs, callback],
  );

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    const observer = new ResizeObserver(entries => {
      const entry = entries[0];

      throttleResize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [callback, throttleResize]);

  return elementRef;
};
