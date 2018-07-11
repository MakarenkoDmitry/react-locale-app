module.exports = (PATH, env) => {
  const common = {
    devtool: env ? 'cheap-module-eval-source-map': 'source-map',
    entry: {
      'index':[PATH.source + 'index.tsx'],
    },
    output: {
      path: env ? PATH.developer : PATH.production,
      publicPath: 'js/dev',
      filename: env ? '[name].js' : '[name].[hash].js',
    },
  };

  if(!env){
    for(let page in common.entry){
      common.entry[page].unshift('babel-polyfill');
      common.entry[page].unshift('babel-regenerator-runtime');
    }
  }else{
    for(let page in common.entry){
      common.entry[page].unshift('babel-regenerator-runtime');
    }

  }

  return common;
};