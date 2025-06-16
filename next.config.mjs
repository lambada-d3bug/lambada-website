import { withPayload } from '@payloadcms/next/withPayload';
import webpack from 'webpack'; // Correct ES module import

/** @type {import('next').NextConfig} */
const nextConfig = {
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
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '**',
            },
        ],
    },
};

export default withPayload(nextConfig, {
    devBundleServerPackages: false,
});
