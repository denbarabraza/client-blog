'use client';

import React, { FC, useRef, useState } from 'react';

import { BurgerMenu } from '@/components/BurgerMenu';
import { IMenuHeader } from '@/components/MenuHeader/intreface';
import NavMenu from '@/components/NavMenu';
import { HeaderTypeEnum } from '@/constants/enums';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import styles from './styles.module.scss';

export const MenuHeader: FC<IMenuHeader> = ({ locale }) => {
  const [open, setOpen] = useState(false);
  const node = useRef(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  const handleMenuOpen = () => {
    setOpen(prev => !prev);
  };

  return (
    <div ref={node}>
      <div className={`${styles.menu} ${open ? styles.open : ''}`}>
        <div onClick={() => close()}>
          <NavMenu type={HeaderTypeEnum.Header} locale={locale} />
        </div>
      </div>
      <BurgerMenu open={open} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};
