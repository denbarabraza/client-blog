'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';

import query from '@/constants/data/query.json';
import { envEmailJs } from '@/constants/envEmailJs';
import { contactUsSchema } from '@/constants/validation';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';

import { IFormContactUs } from './interface';

import styles from './styles.module.scss';

const FormContactUs: FC = () => {
  const [alertText, setAlertText] = useState<string>('');

  const formRef = useRef<HTMLFormElement>(null);
  let timerId: ReturnType<typeof setTimeout> | undefined;
  const t = useTranslations();

  const {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  } = envEmailJs;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormContactUs>({
    resolver: yupResolver(contactUsSchema),
    mode: 'onTouched',
  });

  const handleSendMessage: SubmitHandler<IFormContactUs> = () => {
    emailjs
      .sendForm(
        NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        NEXT_PUBLIC_EMAILJS_FORM_TEMPLATE,
        formRef.current as HTMLFormElement,
        NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(
        result => {
          if (result.text === 'OK') {
            setAlertText(t('ContactUs.sentAlert'));
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
      onSubmit={handleSubmit(handleSendMessage)}
      ref={formRef}
    >
      <div className={styles.inputWrapper} data-cy='contactUsForm'>
        <input
          data-cy='contactUsFullName'
          type='text'
          {...register('fullName', {
            required: true,
          })}
          placeholder={t('ContactUs.placeholder1')}
          className={styles.input}
        />
        <p className={styles.errorMessage}>{errors.fullName?.message}</p>
        <input
          data-cy='contactUsEmail'
          type='email'
          {...register('email', {
            required: true,
          })}
          placeholder={t('ContactUs.placeholder2')}
          className={styles.input}
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>

        <select className={styles.select} {...register('query')}>
          {query.map(({ title }) => (
            <option key={title} value={title}>
              {title}
            </option>
          ))}
        </select>
        <p className={styles.errorMessage}>{errors.query?.message}</p>
        <textarea
          data-cy='contactUsFullMessage'
          className={styles.textarea}
          placeholder={t('ContactUs.placeholder3')}
          {...register('message')}
        />
        <p className={styles.errorMessage}>{errors.message?.message}</p>
        <button className={styles.button} type='submit' data-cy='contactUsButton'>
          {t('ContactUs.button')}
        </button>
      </div>
      {alertText && <div className={styles.alert}>{alertText}</div>}
    </form>
  );
};

export default FormContactUs;
