'use client';

import { FC, memo } from 'react';

import { IBurgerMenu } from './interface';

import styles from './styles.module.scss';

export const BurgerMenu: FC<IBurgerMenu> = memo(({ open, handleMenuOpen }) => {
  const handleOpen = () => {
    handleMenuOpen();
  };

  return (
    <button
      type='button'
      className={`${styles.burgerMenu} ${open ? styles.open : ''}`}
      onClick={handleOpen}
    >
      <div />
      <div />
      <div />
    </button>
  );
});
