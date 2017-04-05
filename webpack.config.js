const path = require("path");

module.exports = function(webpackConfig) {
  webpackConfig.output.path = path.join(__dirname, './public');
  return webpackConfig;
};