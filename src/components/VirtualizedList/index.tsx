import React, { useCallback, useEffect, useRef, useState } from 'react';

import {
  IBaseItem,
  IVirtualizedListProps,
  RenderItem,
} from '@/components/VirtualizedList/types';
import { VirtualizedListItem } from '@/components/VirtualizedList/VirtualizedListItem';

import { defaultVisibleRange } from './config';
import { getVisibleRange } from './utils';

const VirtualizedList = <TItem extends IBaseItem>({
  renderItem: outerRenderItem,
  data,
  defaultItemHeight,
}: IVirtualizedListProps<TItem>) => {
  /*
   * Проблема: нет элементов в DOM. Мы не можем понять, какого размера элементы и за этого мы не можем понять какой нам добавлять скрол.
   * Мы сетаем sizes как получаем элементы в DOM.
   * * */

  const [sizes, setSizes] = useState(() => data.map(() => defaultItemHeight));
  const [visibleRange, setVisibleRange] = useState<{ min: number; max: number }>(
    defaultVisibleRange,
  );
  const sizesRef = useRef(sizes);
  const elRef = useRef<HTMLDivElement>(null);

  /*
   * Чтобы избежать лишних ререндеров, потому что было мерцание экрана(нашел такое решение)
   * */
  sizesRef.current = sizes;

  const containerHeight = sizes.reduce((acc, cur) => acc + cur, 0);

  /*
   * Находим расстояние между верхней границей списка и началом отображаемого содержимого, создаем визуальное отступление перед содержимым списка.
   * */
  const gapBeforeContent = sizes.reduce((acc, cur, index) => {
    if (index < visibleRange.min) {
      return acc + cur;
    }

    return acc;
  }, 0);

  const itemSize = useCallback((index: number) => {
    return sizesRef.current[index];
  }, []);

  const setSize = useCallback((index: number, size: number) => {
    setSizes(prevSizes => {
      const newSizes = [...prevSizes];

      newSizes[index] = size;

      return newSizes;
    });
  }, []);

  useEffect(() => {
    const listener = () => {
      const offsetTop = elRef.current?.offsetTop || 0;
      const { scrollTop } = document.documentElement;
      const windowSize = window.innerHeight;

      setVisibleRange(prevVisibleRange => {
        const { min, max } = getVisibleRange(sizesRef.current, {
          offsetTop,
          scrollTop,
          windowSize,
        });

        const isSame = prevVisibleRange.min === min && prevVisibleRange.max === max;

        return isSame ? prevVisibleRange : { min, max };
      });
    };

    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener);
  }, []);

  const renderItem: RenderItem<TItem> = useCallback(
    (item, index, data) => {
      if (index < visibleRange.min || index > visibleRange.max) {
        return null;
      }

      return (
        <VirtualizedListItem
          index={index}
          itemSize={itemSize}
          setSize={setSize}
          key={item.id}
        >
          {outerRenderItem(item, index, data)}
        </VirtualizedListItem>
      );
    },
    [itemSize, outerRenderItem, setSize, visibleRange.max, visibleRange.min],
  );

  return (
    <div ref={elRef} style={{ height: containerHeight }}>
      <div style={{ height: gapBeforeContent }} />
      {data.map(renderItem)}
    </div>
  );
};

export default VirtualizedList;
