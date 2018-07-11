module.exports = (PATH) => ({
  devServer: {
    port: '8081',
    contentBase: PATH.devServer,
    hot: true,
    inline: true
  }
});