//webpack.config.js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(
      {
        template: path.join(__dirname, '../src/index.html'),
        filename: 'index.html'
      }
    ),
    new CleanWebpackPlugin()
  ],
  entry: './src/main.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: NODE_ENV,
}
