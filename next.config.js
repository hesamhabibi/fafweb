const path = require('path');

const get_extra_aliases = () => {
  const aliases = require('./jsconfig.json');
  const _aliases = {};
  const paths = aliases?.compilerOptions?.paths || {};
  const path_keys = Object.keys(paths);

  path_keys?.forEach(key => {
    const _key = key?.replace('*', '');
    const value = path.join(__dirname, paths[key]?.[0]?.replace('*', ''));
    _aliases[_key] = value;
  })

  return _aliases;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MODE: process.env.MODE,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    SITE_NAME: process.env.SITE_NAME,
    SITE_URL: process.env.SITE_URL,
    SITE_URL_PRD: process.env.SITE_URL_PROD,
    SERVER_ADDRESS: process.env.SERVER_ADDRESS,
    SERVER_PHOTO_ADDRESS: process.env.SERVER_PHOTO_ADDRESS,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gqlserver.wixme.ir',
      },
    ],
  },
  // برای استفاده از lucide react اضافه شد
  transpilePackages: ['lucide-react'],
  // برای استفاده از SVGR (import محتوای فایل SVG) اضافه شد
  webpack: (config, {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}) => {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: {not: /url/}, // exclude if *.svg?url
        use: [{
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [{name: 'preset-default', params: {floatPrecision: 6, overrides: {removeViewBox: false}}}]
            }
          }
        }]
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    // Added extra aliases (ex: core and template)
    config.resolve.alias = {
      ...config.resolve.alias,
      ...get_extra_aliases()
    }

    return config
  }
}

module.exports = nextConfig