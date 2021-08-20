module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy': '#222E3B',
        'light-yellow': '#FFE9D0',
        'orange': '#F26703',
        'magenta-dark': '#853761',
        'magenta-light': '#ecd4dd',
        'blue-dark': '#08758a',
        'blue-light': '#add7de',
        'green-dark': '#0A8D5E',
        'green-light': '#B4E8C9',
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen3/4": "calc(3 * 100vh / 4)",
        "new": "calc(var(--vh, 1vh) * 60)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
      margin: {
        '-word': '-1.1em',
      },
      padding: {
        'screen/2': '50vh',
        'screen2/3': '75vh',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
