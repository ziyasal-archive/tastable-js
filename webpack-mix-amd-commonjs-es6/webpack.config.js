var webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  resolve: {
    modulesDirectories: [
      "."
    ]
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
