const { resolve } = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'ts-loader'
          }
        }
      },
      {
        test: /\.css$/,
        loader: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json', '.ts']
  }
}
