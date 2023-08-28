import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru'],

  defaultLocale: 'false',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
