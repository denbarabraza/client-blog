import React from 'react';

export interface IVirtualizedListItem {
  index: number;
  children: React.ReactNode;
  itemSize: (index: number) => number;
  setSize: (index: number, size: number) => void;
}
