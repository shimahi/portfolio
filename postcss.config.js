module.exports = {
  plugins: {
    'postcss-pxtorem': {},
    'postcss-nesting': {},
    'postcss-custom-media': {
      importFrom: './src/assets/css/foundation/media.css',
    },
    'postcss-custom-properties': {},
    'css-mqpacker': {},
    autoprefixer: {
      grid: 'autoplace',
    },
    doiuse: {},
  },
}
