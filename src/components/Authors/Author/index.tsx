import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { socials } from '@/constants';
import { IAuthor } from '@/types';

import styles from './styles.module.scss';

const Author: FC<IAuthor> = ({ id, name, image, company, post }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
      </div>
      <Link href={`/author/${id}`} className={styles.name}>
        {name}
      </Link>
      <p className={styles.post}>{`${post} ${company}`}</p>
      <div className={styles.socials}>
        {socials.map(({ icon, href }) => (
          <Link href={href} key={href}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Author;
