const path = require('path');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'js', 'pages', 'index.js'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[contenthash].js',
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, 'src'),
      port: env.port ?? 8080,
      open: true,
      hot: true,
    },
    devtool: isDev && 'inline-source-map',
    resolve: {
      extensions: ['.js'],
    },
    plugins: [],
    module: {},
  };
};
