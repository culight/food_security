const webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        zf: 'foundation-sites/js',
      },
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: {},
        },
      }),
    ],
  },
};
