import { NextIntlClientProvider } from 'next-intl';

import FormContactUs from '@/components/FormContactUs';
import { LocaleValueEnum } from '@/constants/enums';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('FormContactUs', () => {
  it('shows a warning message when trying to send invalid data', async () => {
    const message = {
      ContactUs: {
        title: 'Contact us',
        subtitle: 'Let’s Start a Conversation',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
        workingHoursTitle: 'Working hours',
        workingDays: 'Monday To Friday',
        workingHours: '9:00 AM to 8:00 PM',
        support: 'Our Support Team is available 24/7',
        placeholder1: 'Full Name',
        placeholder2: 'Your Email',
        placeholder3: 'Message',
        button: 'Send Message',
        sentAlert: 'Thanks! You will be contacted soon!',
      },
    };

    render(
      <NextIntlClientProvider locale={LocaleValueEnum.En} messages={message}>
        <FormContactUs />
      </NextIntlClientProvider>,
    );
    const buttonSend = screen.getByText(message.ContactUs.button)!;

    await waitFor(() => {
      fireEvent.click(buttonSend);
    });

    await waitFor(() => {
      expect(screen.getByText('No email provided')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Full Name is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Message is required')).toBeInTheDocument();
    });
  });
});
