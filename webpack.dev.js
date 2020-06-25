const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './client.jsx',
  mode: 'development',
  watch: true,
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'public', 'javascript'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_BASE_URL: JSON.stringify('http://localhost:1337/api')
      // console.log('JSON.stringify('https://localhost:1337/api/'): ', JSON.stringify('https://localhost:1337/api/'));
      // console.log('API_BASE_URL: JSON.stringify('https://localhost:1337/api/'): ', API_BASE_URL: JSON.stringify('https://localhost:1337/api/'));
    })
  ]
}
