const isProd = process.env.NODE_ENV === 'production';
 
module.exports = withPlugins([
  {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/lemaa/reactheme.io/gh-pages/' : '',
   },
]);