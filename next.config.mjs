// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';
import bundleAnalyzer from '@next/bundle-analyzer';

// Create the internationalization plugin.
const withNextIntl = createNextIntlPlugin();

// Create the bundle analyzer plugin with the necessary options.
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Compose the two plugins together.
export default withNextIntl(
    withBundleAnalyzer({
      // Your Next.js configuration options here
      reactStrictMode: false,
      eslint: {
        ignoreDuringBuilds: true,
      },
      experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
      },
      // ... any other configuration options you may have
    })
);
