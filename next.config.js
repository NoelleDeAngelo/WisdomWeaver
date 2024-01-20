/** @type {import('next').NextConfig} */
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

module.exports = stylexPlugin({
  filename: 'stylex-bundle.css',
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
