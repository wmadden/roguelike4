var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var SRC_DIR = process.env.npm_package_config_srcDir;

require("dotenv").load({ silent: true });

function absolutePathTo(relativePath) {
  return path.join(__dirname, relativePath);
}

module.exports = {
  entry: {
    "main.js": ["babel-polyfill", "./src/main"],
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["es2015"],
        },
      },
      {
        test: /\.(css|scss)$/,
        loader: "style-loader!css-loader?sourceMaps!postcss-loader?sourceMaps",
      },
    ],
  },

  resolve: {
    extensions: ["", ".js", ".css", ".mp3", ".ogg", ".flac"],
    root: [
      absolutePathTo(SRC_DIR),
    ],
  },

  plugins: [new HtmlWebpackPlugin({
    title: "Roguelike 4",
  })],

};
