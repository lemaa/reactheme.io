const path = require('path');

module.exports = {
    webpackFinal: async (baseConfig, options) =>
    {
        const { module = {} } = baseConfig;

        const newConfig = {
            ...baseConfig,
            module: {
                ...module,
                rules: [ ...(module.rules || []) ],
            },
        };

        // SCSS 
        newConfig.module.rules.push({
            test: /\.(s*)css$/,
            loaders: [ 'style-loader', 'css-loader', 'sass-loader' ],
            include: path.resolve(__dirname, '../src/styles/global.scss'),
        });
        // PATH ALIAS
        newConfig.resolve.alias = {
            ...baseConfig.resolve.alias,
            'next-i18next': 'react-i18next',
            "@Element": path.resolve(__dirname, "../src/components/elements"),
            "@Layout": path.resolve(__dirname, "../src/components/layouts"),
            "@Module": path.resolve(__dirname, "../src/components/modules"),
            "@Template": path.resolve(__dirname, "../src/components/templates"),
            "@Constant": path.resolve(__dirname, "../src/constants"),
            "@Context": path.resolve(__dirname, "../src/context"),
            "@Hook": path.resolve(__dirname, "../src/hooks"),
            "@Util": path.resolve(__dirname, "../src/utils"),
            "@Style": path.resolve(__dirname, "../src/styles"),
            "@CustomType": path.resolve(__dirname, "../src/types"),
            "@Mock": path.resolve(__dirname, "../src/mocks"),
            "@Pages": path.resolve(__dirname, "../pages"),
            "@Test": path.resolve(__dirname, "../test")
        };
        // If you are using CSS Modules, check out the setup from Justin (justincy)
        // Many thanks to Justin for the inspiration
        // https://gist.github.com/justincy/b8805ae2b333ac98d5a3bd9f431e8f70#file-next-preset-js
        return newConfig;
    },
};