import React, { FC, useCallback } from 'react';

import { IVirtualizedListItem } from '@/components/VirtualizedList/VirtualizedListItem/interface';
import { useSize } from '@/hooks/useSize';

export const VirtualizedListItem: FC<IVirtualizedListItem> = ({
  index,
  children,
  itemSize,
  setSize,
}) => {
  /*
   * onResize используется для обработки изменений размеров элемента DOM, которые отслеживаются с помощью хука useSize.
   * */
  const onResize = useCallback(
    (size: { width: number; height: number }) => {
      if (size.height !== itemSize(index)) setSize(index, size.height);
    },
    [index, itemSize, setSize],
  );

  const elRef = useSize<HTMLDivElement>(onResize, 10);

  return (
    <div ref={elRef} style={{ display: 'flex' }}>
      {children}
    </div>
  );
};
