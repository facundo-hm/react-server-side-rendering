const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

require('dotenv').config()

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    publicPath: __dirname + '/build/public',
    path: __dirname + '/build/public'
  },
  node: {
    fs: 'empty'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : '',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', 'css']
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '/styles/[name].css',
      chunkFilename: '/styles/[id].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      'process.env.GOOGLE_CLIENT_ID': JSON.stringify(
        process.env.GOOGLE_CLIENT_ID
      )
    })
  ],

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },

      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          }
        ]
      },

      {
        test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
      }
    ]
  }
}
