'use strict';

module.exports = {
  entry: './app/client/js/index.jsx',
  output: {
    path: __dirname,
    publicPath: "/",
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: []
};
