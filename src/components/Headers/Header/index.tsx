'use client';

import React, { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import NavMenu from '@/components/NavMenu';
import { HeaderTypeEnum } from '@/constants/enums';

import HeaderBlockLng from './HeaderBlockLng';
import { IHeader } from './interface';

import styles from './styles.module.scss';

const Header: FC<IHeader> = ({ locale }) => {
  const currentPath = usePathname();

  const translationPath = useMemo(
    () => currentPath.slice(4, currentPath.length),
    [currentPath],
  );

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <div className={styles.title}>Modsen Client Blog</div>
          <HeaderBlockLng locale={locale} translationPath={translationPath} />
          <div className={styles.links}>
            <NavMenu type={HeaderTypeEnum.Header} locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
