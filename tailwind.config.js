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
        xxl: '1780px',
      },
      maxWidth: {
        xxl: '1780px',
      },
      colors: {
        main: '#00ede4',
        dark: '#00a19a',
        lightGray: '#c3c4c5',
        base: '#f5f5f5',
        text: '#777',
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
