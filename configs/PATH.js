const path = require('path');

module.exports = (__dirname) => ({
  devServer: './',
  manifest: path.join(__dirname, '/manifest/manifest-js.json'),
  source:  path.join(__dirname, '/src/'),
  style:  path.join(__dirname, '/style/'),
  developer:  path.join(__dirname, '/js/dev'),
  production:  path.join(__dirname, '/js/prod')
});