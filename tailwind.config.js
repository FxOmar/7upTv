/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {},
  variants: {
    margin: ['direction'],
    padding: ['direction'],
    borderWidth: ['direction'],
  },
  plugins: [
    require('tailwindcss-dir')()
  ]
}
