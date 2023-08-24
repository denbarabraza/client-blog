'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';

import { IFooter } from '@/components/Footer/interface';
import LayoutWrapper from '@/components/LayoutWrapper';
import NavMenu from '@/components/NavMenu';
import { HeaderTypeEnum } from '@/components/NavMenu/types';
import { blogTitle, socials } from '@/constants';

import Newsletter from './Newsletter';

import styles from './styles.module.scss';

const Footer: FC<IFooter> = ({ locale }) => {
  const t = useTranslations();

  return (
    <footer id='footer' className={styles.footer}>
      <div className={styles.wrapper}>
        <LayoutWrapper>
          <div className={styles.navbar}>
            <span className={styles.title}>{blogTitle}</span>
            <div className={styles.links}>
              <NavMenu type={HeaderTypeEnum.Footer} locale={locale} />
            </div>
          </div>
          <Newsletter />
          <div className={styles.contacts}>
            <section className={styles.info}>
              <p>{t('Footer.info')}</p>
              <p>Hello@finsweet.com 020 7993 2905</p>
            </section>
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
