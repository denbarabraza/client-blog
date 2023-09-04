'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IFooter } from '@/components/Footer/interface';
import LayoutWrapper from '@/components/LayoutWrapper';
import NavMenu from '@/components/NavMenu';
import { socials } from '@/constants';
import { HeaderTypeEnum } from '@/constants/enums';

import Newsletter from './Newsletter';

import styles from './styles.module.scss';

const Footer: FC<IFooter> = ({ locale }) => {
  const t = useTranslations();

  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.wrapper}>
        <LayoutWrapper>
          <div className={styles.navbar}>
            <div className={styles.title}>Modsen Client Blog</div>
            <div className={styles.menuItem}>
              <NavMenu type={HeaderTypeEnum.Footer} locale={locale} />
            </div>
          </div>
          <Newsletter />
          <div className={styles.contacts}>
            <div className={styles.info}>
              {t('Footer.info')}, Hello@finsweet.com 020 7993 2905
            </div>
            <div className={styles.icons}>
              {socials.map(({ icon, href }) => (
                <a href={href} key={href}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </footer>
  );
};

export default Footer;
