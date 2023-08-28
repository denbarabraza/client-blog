'use client';

import React, { FC, RefObject, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Modal } from '@/components/Modal';
import { footerNavMenu, headerNavMenu } from '@/constants/navMenu';
import { checkPathActive } from '@/utils/checkPathActive';

import { HeaderTypeEnum, INavMenu } from './types';

import styles from './styles.module.scss';

const NavMenu: FC<INavMenu> = ({ type, locale }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const t = useTranslations();
  const ref = useRef<HTMLDivElement>(null);

  const pathName = usePathname();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const headerType = type === HeaderTypeEnum.Header;
  const navigationMenu = headerType ? headerNavMenu : footerNavMenu;

  return (
    <>
      <nav className={styles.navMenu}>
        {navigationMenu.map(({ name, path }) => {
          const isActive = checkPathActive(pathName, path);

          return (
            <div className={styles.linkItem} key={name}>
              <Link
                key={name}
                href={`/${locale}${path}`}
                className={isActive ? styles.active : ''}
              >
                {t(name)}
              </Link>
            </div>
          );
        })}
      </nav>
      {headerType && (
        <>
          <button type='button' className={styles.button} onClick={handleModalOpen}>
            {t('Home.video')}
          </button>

          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
              <iframe
                ref={ref as RefObject<HTMLIFrameElement>}
                width='100%'
                height='100%'
                allowFullScreen
                title='video'
                className={styles.video}
                src='https://www.youtube.com/embed/lQQiwf9z5gQ'
              />
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default NavMenu;
