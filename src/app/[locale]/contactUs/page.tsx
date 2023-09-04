'use client';

import React from 'react';

import ContactUsInfo from '@/components/ContactUsInfo';
import MapInContactUs from '@/components/MapInContactUs';
import VirtualizedList from '@/components/VirtualizedList';
import { VirtualizedListItem } from '@/types';
import { renderVirtualizedList } from '@/utils/renderVirtualizedList';

const ContactUs = () => {
  const dataContactUsPage: VirtualizedListItem[] = [
    {
      id: 'contactUsInfo',
      render: () => <ContactUsInfo />,
    },
    {
      id: 'mapInContactUs',
      render: () => <MapInContactUs />,
    },
  ];

  return (
    <VirtualizedList
      data={dataContactUsPage}
      renderItem={renderVirtualizedList}
      defaultItemHeight={250}
    />
  );
};

export default ContactUs;
