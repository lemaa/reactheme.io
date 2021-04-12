const withPlugins = require("next-compose-plugins");
const { i18n } = require('./next-i18next.config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = withPlugins([
    {
        assetPrefix: isProd ? 'https://cdn.statically.io/gh/lemaa/reactheme.io/gh-pages/' : '',
    },
    {
        i18n
    },
]);

