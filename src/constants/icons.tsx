import React from 'react';
import Image from 'next/image';

export const icons = {
  facebook: (
    <Image src='/assets/icons/facebook.svg' alt='facebook' width={20} height={20} />
  ),
  twitter: (
    <Image src='/assets//icons/twitter.svg' alt='twitter' width={20} height={20} />
  ),
  instagram: (
    <Image src='/assets/icons/instagram.svg' alt='instagram' width={20} height={20} />
  ),
  linkedin: (
    <Image src='/assets/icons/linkedin.svg' alt='linkedin' width={20} height={20} />
  ),
  partner1: (
    <Image src='/assets/icons/logo1.svg' alt='partner1' width={160} height={32} />
  ),
  partner2: (
    <Image src='/assets/icons/logo2.svg' alt='partner2' width={136} height={32} />
  ),
  partner3: (
    <Image src='/assets/icons/logo3.svg' alt='partner3' width={135} height={32} />
  ),
  partner4: (
    <Image src='/assets/icons/logo4.svg' alt='partner4' width={153} height={32} />
  ),
  partner5: (
    <Image src='/assets/icons/logo5.svg' alt='partner5' width={136} height={32} />
  ),
  back: <Image src='/assets/icons/back.svg' alt='back' width={48} height={48} />,
  next: <Image src='/assets/icons/next.svg' alt='next' width={48} height={48} />,
  burger: <Image src='/assets/icons/burger.svg' alt='burger' width={28} height={28} />,
};
