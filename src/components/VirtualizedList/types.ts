import type { ReactNode } from 'react';

export interface IBaseItem {
  id: string;
}

export type RenderItem<TItem extends IBaseItem> = (
  item: TItem,
  index: number,
  data: TItem[],
) => ReactNode;

export interface IVirtualizedListProps<TItem extends IBaseItem> {
  data: TItem[];
  renderItem: RenderItem<TItem>;
  defaultItemHeight: number;
}
