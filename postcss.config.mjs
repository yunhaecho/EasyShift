/** @type {import('postcss-load-config').Config} */
const config = {
  tailwindcss: {},
  autoprefixer: {},
  'postcss-pxtorem': {
    rootValue: 16,
    unitPrecision: 5,
    propList: ['*', '!border*'],
    selectorBlackList: ['html'],
    replace: true,
    mediaQuery: true,
    minPixelValue: 1,
  },
};

export default config;
