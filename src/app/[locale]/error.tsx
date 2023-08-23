'use client';

import React from 'react';

import styles from './page.module.scss';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const handleReset = () => reset();

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.errorMessage}>Something went wrong!</h2>
      <h2 className={styles.errorMessage}>{error.message}</h2>
      <button className={styles.button} type='button' onClick={handleReset}>
        Try again
      </button>
    </div>
  );
}
