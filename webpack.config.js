const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env) => {
  const isDev = env.mode === 'development';
  const isProd = env.mode === 'production';

  const htmlLoader = {
    test: /\.html$/i,
    loader: 'html-loader',
  };

  const postCssLoader = {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          [
            'postcss-preset-env',
            {
              browsers: 'last 4 versions',
            },
          ],
        ],
      },
    },
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      isProd && postCssLoader,
    ],
  };

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]',
    },
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: 'defaults' }],
        ],
      },
    },
  };

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
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'index.html'),
      }),
      new webpack.HotModuleReplacementPlugin(),
      isProd && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
      }),
      isDev && new ESLintPlugin(),
      new FaviconsWebpackPlugin({
        logo: path.resolve(__dirname, 'src', 'assets', 'images', 'favicon', 'favicon.png'),
        outputPath: path.resolve(__dirname, 'build', 'images', 'favicon'),
        prefix: 'images/favicon/',
      }),
    ].filter(Boolean),
    module: {
      rules: [
        isProd && htmlLoader,
        cssLoader,
        fontsLoader,
        babelLoader,
      ],
    },
  };
};
