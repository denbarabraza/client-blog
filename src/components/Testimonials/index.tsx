import React from 'react';
import { useTranslations } from 'next-intl';

import AuthorsInTestimonials from './AuthorsInTestimonials';

import styles from './styles.module.scss';

const Testimonials = () => {
  const t = useTranslations();

  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div className={styles.testimonials}>
          <p className={styles.label}>{t('Home.testimonialsLabel')}</p>
          <p className={styles.title}>{t('Home.testimonialsTitle')}</p>
          <p className={styles.text}>{t('Home.testimonialsText')}</p>
        </div>
        <AuthorsInTestimonials />
      </section>
    </div>
  );
};

export default Testimonials;
