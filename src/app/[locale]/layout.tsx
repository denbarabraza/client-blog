import React, { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import Header from '@/components/Headers/Header';

import './globals.scss';

export const metadata = {
  title: 'Client Blog App',
  description: 'We are a community of content writers who share their learnings',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: 'ru' | 'en' };
}) {
  const { locale } = params;
  let messages;

  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header locale={locale} />
          <main>{children}</main>
          <div>Footers</div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
