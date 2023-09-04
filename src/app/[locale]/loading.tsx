'use client';

import React from 'react';
import { Loader as RootLoader } from 'components-client-blog';

export default function Loader() {
  return (
    <RootLoader
      borderTopColor='#5a34a9'
      borderColor='#eec14a'
      backgroundColorContainer='#e5e5e5ff'
    />
  );
}
