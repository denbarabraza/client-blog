import React, { FC } from 'react';

import { ILayoutWrapper } from './types';

import styles from './styles.module.scss';

const LayoutWrapper: FC<ILayoutWrapper> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default LayoutWrapper;
