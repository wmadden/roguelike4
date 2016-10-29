var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['babel-polyfill', './src/main'],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          cacheDirectory: true,
          presets: ['es2015'],
        },
      },
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    title: "Roguelike 4",
  })],

}
