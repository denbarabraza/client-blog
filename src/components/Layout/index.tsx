import React, { FC } from 'react';

import { LayoutProps } from './types';

import styles from './styles.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
