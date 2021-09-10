const withPlugins = require("next-compose-plugins");
const { i18n } = require('./next-i18next.config');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
    {
        env: { PUBLIC_URL: '/', }
    },
    {
        i18n
    },
    [ withBundleAnalyzer ],
    {async redirects() {
        return [
            {
                source: '/',
                destination: '/analytics',
                permanent: true,
            },
        ]
    },}
]);
