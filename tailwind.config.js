module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'navy': '#222E3B',
        'light-yellow': '#FFE9D0',
        'orange': '#F26703',
        'magenta-dark': '#853761',
        'magenta-light': '#ecd4dd',
      },
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
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
