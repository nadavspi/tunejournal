const Configs = require('react-project/webpack');

const GLOBAL_CSS = /\global.css$/;

Configs.ClientConfig.module.loaders.forEach((def) => {
  if (def.loader.match(/style-loader/)) {
    def.exclude = GLOBAL_CSS;
  }
});

Configs.ClientConfig.module.loaders.push({
  test: GLOBAL_CSS,
  loader: 'style-loader!css-loader',
});

module.exports = Configs;
