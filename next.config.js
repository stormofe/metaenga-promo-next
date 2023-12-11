const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
	 config.resolve.alias['@assets'] = path.join(__dirname, 'public/assets')
    return config;
  },
}

module.exports = nextConfig;

