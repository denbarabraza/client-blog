'use client';

import React, { FC, RefObject, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Modal } from '@/components/Modal';
import { HeaderTypeEnum } from '@/constants/enums';
import { footerNavMenu, headerNavMenu } from '@/constants/navMenu';
import { checkPathActive } from '@/utils/checkPathActive';

import { INavMenu } from './interface';

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
      <div className={styles.navMenu} data-cy='navMenu'>
        {navigationMenu.map(({ name, path }) => {
          const isActive = checkPathActive(pathName, path);

          return (
            <div className={styles.linkItem} key={name}>
              <Link
                data-cy='link'
                key={name}
                href={`/${locale}${path}`}
                className={isActive ? styles.active : ''}
              >
                {t(name)}
              </Link>
            </div>
          );
        })}
      </div>
      {headerType && (
        <>
          <button
            type='button'
            className={styles.button}
            onClick={handleModalOpen}
            data-cy='buttonModal'
          >
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
