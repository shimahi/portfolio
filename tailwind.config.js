module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        xs: { max: '450px' },
        xxl: '1480px',
      },
      maxWidth: {
        xxl: '1480px',
      },
      colors: {
        main: '#00ede4',
        dark: '#00a19a',
        lightGray: '#c3c4c5',
        baseColor: '#f5f5f5',
        text: '#666',
      },
      fontFamily: {
        noto: [
          'Noto Sans JP',
          'Yu Gothic',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          '游ゴシック Medium',
          'YuGothic',
          'YuGothicM',
          'メイリオ',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
  variants: {},
  plugins: [],
}
