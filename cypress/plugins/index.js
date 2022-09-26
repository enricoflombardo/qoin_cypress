

const browserify = require('@cypress/browserify-preprocessor')

module.exports = (on) => {
  const options = browserify.defaultOptions
  options.browserifyOptions.transform[1][1].plugins.push([
    'module-resolver',
     {
        alias: {
            '@tests': './tests',
            '@helpers': './tests/helpers',
        },
    },
  ]);
  on('file:preprocessor', browserify(options))
}