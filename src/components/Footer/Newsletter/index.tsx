'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';

import { envEmailJs } from '@/constants/envEmailJs';
import { newsLetterFooterSchema } from '@/constants/validation';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { INewsLetterFooterInput } from './interface';

import styles from './styles.module.scss';

const Newsletter = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations();
  const [alertText, setAlertText] = useState<string>('');
  let timerId: ReturnType<typeof setTimeout> | undefined;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<INewsLetterFooterInput>({
    resolver: yupResolver(newsLetterFooterSchema),
    mode: 'onTouched',
  });

  const {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE,
  } = envEmailJs;

  const handleSubscribe: SubmitHandler<INewsLetterFooterInput> = () => {
    emailjs
      .sendForm(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE,
        formRef.current as HTMLFormElement,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        result => {
          if (result.text === 'OK') {
            setAlertText(t('Footer.subscribedAlert'));
            timerId = setTimeout(() => {
              setAlertText('');
            }, 5000);
          }
        },
        error => {
          setAlertText(error.text);
          timerId = setTimeout(() => {
            setAlertText('');
          }, 5000);
        },
      );
    reset();
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit(handleSubscribe)}
      ref={formRef}
    >
      <div className={styles.form} data-cy='formNewsletter'>
        <h3 className={styles.title}>{t('Newsletter.title')}</h3>
        <section className={styles.main}>
          <div className={styles.inputWrapper}>
            <input
              type='email'
              {...register('email', {
                required: true,
              })}
              placeholder='e@example.com'
              className={styles.input}
            />
            <p className={styles.errorMessage} data-cy='errorMessageInput'>
              {errors.email?.message}
            </p>
          </div>
          <button className={styles.button} type='submit'>
            {t('Newsletter.button')}
          </button>
          {alertText && (
            <div className={styles.alert} data-cy='alertNewsletter'>
              {alertText}
            </div>
          )}
        </section>
      </div>
    </form>
  );
};

export default Newsletter;
