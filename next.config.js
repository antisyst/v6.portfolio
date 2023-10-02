/** @type {import('next').NextConfig} */
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: { esmExternals: true },
  webpack: (config, { isServer }) => {
    config.resolve.extensions.push('.ts', '.tsx');

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      options: { transpileOnly: true },
    });

    if (!isServer) {
      config.optimization.minimizer.push(new TerserPlugin());
    }

    if (!isServer) {
      config.plugins.push(new CompressionPlugin());
    }

    return config;
  },
};

module.exports = nextConfig;
