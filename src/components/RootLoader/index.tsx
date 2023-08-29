import React from 'react';

import styles from './styles.module.scss';

const RootLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.spinner} />
      </div>
    </div>
  );
};

export default RootLoader;
