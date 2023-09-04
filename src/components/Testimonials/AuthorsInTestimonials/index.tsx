import React, { useState } from 'react';
import Image from 'next/image';

import { icons } from '@/constants';
import authors from '@/constants/data/authors.json';

import styles from './styles.module.scss';

const AuthorsInTestimonials = () => {
  const [currentAuthor, setCurrentAuthor] = useState(0);

  const { from, image, name, review } = authors[currentAuthor];

  const handleBack = () => {
    if (currentAuthor !== 0) {
      setCurrentAuthor(currentAuthor - 1);
    }
  };

  const handleNext = () => {
    if (currentAuthor !== authors.length - 1) {
      setCurrentAuthor(currentAuthor + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.review}>{review}</p>
      <section className={styles.content}>
        <div className={styles.author}>
          <div className={styles.image}>
            <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.from}>{from}</p>
          </div>
        </div>
        <div className={styles.navigation}>
          <button
            type='button'
            className={`${styles.button} ${currentAuthor !== 0 || styles.disabled}`}
            onClick={handleBack}
          >
            {icons.back}
          </button>
          <button
            type='button'
            className={`${styles.button} ${
              currentAuthor !== authors.length - 1 || styles.disabled
            }`}
            onClick={handleNext}
          >
            {icons.next}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AuthorsInTestimonials;
