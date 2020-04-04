const path = require('path');

const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.argv.indexOf('-p') !== -1;

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    main: './source/js/script.js',
    style: './source/scss/style.scss',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: false,
    compress: true,
    progress: true,
    watchContentBase: true,
    liveReload: true,
    contentBase: path.join(__dirname, 'source/'),
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),
    new HtmlWebpackPlugin({
      template: 'source/index.html',
    }),
    new CopyWebpackPlugin([
      // {
      //   from: './source/favicon',
      //   to: './favicon',
      // },
      {
        from: './source/img',
        to: './img',
      },
      {
        from: './source/vendors',
        to: './vendors',
      },
    ]),
  ],
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    minimizer: isProd
      ? [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: false,
        }),
        new OptimizeCSSAssetsPlugin({})]
      : [],
  },
};
