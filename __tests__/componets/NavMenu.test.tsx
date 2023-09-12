import { usePathname } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { HeaderTypeEnum, LocaleValueEnum } from 'constants/enum';

import NavMenu from '@/components/NavMenu';
import { footerNavMenu, headerNavMenu } from '@/constants';
import messagesEn from '@/messages/en.json';
import messagesRus from '@/messages/ru.json';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation');

describe('NavMenu', () => {
  it('renders a NavMenu for Header and Footer in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <NextIntlClientProvider locale={LocaleValueEnum.En} messages={messagesEn}>
        <NavMenu locale={LocaleValueEnum.En} type={HeaderTypeEnum.Footer} />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Contact us')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('renders a NavMenu for Header and Footer in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'rus');
    render(
      <NextIntlClientProvider locale={LocaleValueEnum.Ru} messages={messagesRus}>
        <NavMenu locale={LocaleValueEnum.Ru} type={HeaderTypeEnum.Footer} />
      </NextIntlClientProvider>,
    );

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(screen.getByText('Свяжись с нами')).toBeInTheDocument();
    expect(screen.getByText('Политика конфиденциальности')).toBeInTheDocument();
  });
});
