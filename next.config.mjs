import { withPayload } from '@payloadcms/next/withPayload';
import webpack from 'webpack'; // Correct ES module import

/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'fr', 'it'],
        defaultLocale: 'fr',
    },
    webpack: (config) => {
        config.plugins.push(
            new webpack.IgnorePlugin({
                resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
            }),
        );
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/api/media/file/**',
            },
        ],
    },
};

export default withPayload(nextConfig, {
    devBundleServerPackages: false,
});
