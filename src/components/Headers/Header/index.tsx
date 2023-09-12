'use client';

import React, { FC, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderTypeEnum } from 'constants/enum';

import { MenuHeader } from '@/components/MenuHeader';
import NavMenu from '@/components/NavMenu';
import { PATH } from '@/constants/path';

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
          <Link href={PATH.HOME}>
            <div className={styles.title}>Modsen Client Blog</div>
          </Link>
          <HeaderBlockLng locale={locale} translationPath={translationPath} />
          <div className={styles.menuItem} data-cy='menuItem'>
            <NavMenu type={HeaderTypeEnum.Header} locale={locale} />
          </div>
          <div className={styles.menuBurger}>
            <MenuHeader locale={locale} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
