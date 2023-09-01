import { VirtualizedListItem } from '@/types';

export const renderVirtualizedList = (item: VirtualizedListItem) => {
  return item.render();
};
