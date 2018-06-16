var webpack = require('webpack');

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'zf': 'foundation-sites/js'
      }
    }
  }
};
