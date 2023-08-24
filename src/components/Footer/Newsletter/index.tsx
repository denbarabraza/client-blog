'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { newsLetterFooterSchema } from '@/utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';

import { INewsLetterFooterInput } from './interface';

import styles from './styles.module.scss';

const Newsletter = () => {
  const t = useTranslations();
  const [alertText, setAlertText] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsLetterFooterInput>({
    resolver: yupResolver(newsLetterFooterSchema),
    mode: 'onTouched',
  });

  const handleSubscribe = async ({ email }: INewsLetterFooterInput) => {
    console.log(email);
    reset();
  };

  const handleCloseAlert = () => {
    setAlertText('');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(handleSubscribe)}>
      <div className={styles.form}>
        <h3 className={styles.title}>{t('Newsletter.title')}</h3>
        <section className={styles.main}>
          <div className={styles.inputWrapper}>
            {alertText && (
              <button type='button' className={styles.alert} onClick={handleCloseAlert}>
                {alertText}
              </button>
            )}
            <input
              type='email'
              {...register('email', {
                required: true,
              })}
              placeholder='e@example.com'
              className={styles.input}
            />
            <p className={styles.errorMessage}>{errors.email?.message}</p>
          </div>
          <button className={styles.button} type='submit'>
            {t('Newsletter.button')}
          </button>
        </section>
      </div>
    </form>
  );
};

export default Newsletter;
