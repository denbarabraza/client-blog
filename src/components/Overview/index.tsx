import React from 'react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.scss';

const Overview = () => {
  const t = useTranslations();

  const items = [
    { count: '12+', text: t('AboutUs.blogsPublished') },
    { count: '18K+', text: t('AboutUs.views') },
    { count: '30K+', text: t('AboutUs.usersTotal') },
  ];

  const renderedItems = items.map((item, index) => (
    <div className={styles.item} key={index}>
      <h2 className={styles.count}>{item.count}</h2>
      <p className={styles.text}>{item.text}</p>
    </div>
  ));

  return (
    <div className={styles.wrapper}>
      <article className={styles.overview}>{renderedItems}</article>
      <div className={styles.pattern}>
        <div className={styles.left} />
        <div className={styles.right} />
      </div>
    </div>
  );
};

export default Overview;
