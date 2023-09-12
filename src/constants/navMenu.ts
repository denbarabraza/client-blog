import { PATH } from '@/constants/path';

export const headerNavMenu = [
  {
    name: 'Home.title',
    path: PATH.HOME,
  },
  {
    name: 'Blog.title',
    path: PATH.BLOG,
  },
  {
    name: 'AboutUs.title',
    path: PATH.ABOUTUS,
  },
  {
    name: 'ContactUs.title',
    path: PATH.CONTACTUS,
  },
];

export const footerNavMenu = [
  ...headerNavMenu,
  {
    name: 'PrivacyPolicy.title',
    path: PATH.PRIVACYPOLICY,
  },
];
