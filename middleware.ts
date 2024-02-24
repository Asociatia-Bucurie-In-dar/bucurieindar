import createMiddleware from 'next-intl/middleware';

export const locales = ['ro', 'en'];

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: locales[0],
    
    localePrefix: 'as-needed',
});

export const config = {
    matcher: ['/', '/(de|en)/:path*', '/((?!api|static|.*\\..*|_next).*)']
}

