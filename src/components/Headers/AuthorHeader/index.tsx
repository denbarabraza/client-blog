'use client';

import React, { FC } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { socials } from '@/constants';

import { IAuthorHeader } from './interface';

import styles from './styles.module.scss';

const AuthorHeader: FC<IAuthorHeader> = ({ name, image, review }) => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <div className={styles.image}>
          <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{`${t('Author.greeting')}${name}${t(
            'Author.welcome',
          )}`}</h3>
          <p className={styles.text}>{review}</p>
          <div className={styles.icons}>
            {socials.map(({ icon, href }) => (
              <a href={href} key={href}>
                {icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.pattern}>
          <div className={styles.left} />
          <div className={styles.right} />
        </div>
      </section>
    </div>
  );
};

export default AuthorHeader;
