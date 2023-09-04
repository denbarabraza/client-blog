import React, { FC, forwardRef } from 'react';

import { ILayoutWrapper } from './interface';

import styles from './styles.module.scss';

const LayoutWrapper: FC<ILayoutWrapper> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default LayoutWrapper;
