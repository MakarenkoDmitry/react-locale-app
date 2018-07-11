const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');

module.exports = (environment, option) => {
  let env = option.mode === 'development';

  const PATH = require('./configs/PATH')(__dirname);
  const common = require('./configs/common')(PATH, env);
  const loader = require('./configs/loader')(PATH, env, autoprefixer);
  const plugin = require('./configs/plugin')(webpack, PATH, env);
  const devServer = require('./configs/devServer')(PATH);
  const other = require('./configs/other')();

  const dev = [common, loader, devServer, other ];
  const prod = [common, loader, other, plugin];

  console.log("devServer", devServer)
  return merge(env ? dev : prod);
} ;