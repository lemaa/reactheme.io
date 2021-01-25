const isProd = process.env.NODE_ENV === 'production';

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: isProd ? 'https://cdn.statically.io/gh/lemaa/reactheme.io/gh-pages/' : '',
  }],
  {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/lemaa/reactheme.io/gh-pages/' : '',
   },
]);