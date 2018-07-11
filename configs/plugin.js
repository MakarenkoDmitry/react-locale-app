const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = (webpack, PATH, env) => {
  const plugin = {
    plugins: [
    ]
  };

  if(!env) {
    plugin.plugins.push(
      new WebpackAssetsManifest({
        output: PATH.manifest,
      })
    )
  }else {
    plugin.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    );
  }

  return plugin;
};