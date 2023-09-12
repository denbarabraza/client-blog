'use client';

import React, { FC, memo } from 'react';
import Image from 'next/image';
import { TextInAboutTeamEnum } from 'constants/enum';

import { IAboutTeam } from './interface';

import styles from './styles.module.scss';

const AboutTeam: FC<IAboutTeam> = memo(
  ({ variant, alt, src, shape, label, text, title }) => {
    const posTextRightRule = variant === TextInAboutTeamEnum.Right;

    return (
      <div
        className={`${styles.wrapper} ${posTextRightRule ? styles.row : styles.row}`}
        style={{ flexDirection: posTextRightRule ? 'row' : 'row-reverse' }}
      >
        <div className={styles.image}>
          <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.shape}>
          <Image
            src={shape}
            alt={alt}
            fill
            style={{
              left: posTextRightRule ? '-500px' : '70px',
              top: posTextRightRule ? '210px' : '-70px',
            }}
          />
        </div>
        <section className={styles.content}>
          <h3 className={styles.label}>{label}</h3>
          <h4 className={styles.title}>{title}</h4>
          <p className={styles.text}>{text}</p>
        </section>
      </div>
    );
  },
);

export default AboutTeam;
