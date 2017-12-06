var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader", //vue-style-loader: Similar to style-loader, you can chain it after css-loader to dynamically inject CSS into the document as style tag
          use: "css-loader" // Takes the CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality:
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader", //vue-style-loader: Similar to style-loader, you can chain it after css-loader to dynamically inject CSS into the document as style tag
          use: ['css-loader', // Takes the CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality:
            'sass-loader']
        })
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader", //vue-style-loader: Similar to style-loader, you can chain it after css-loader to dynamically inject CSS into the document as style tag
          use: ['css-loader', // Takes the CSS file and returns the CSS with imports and url(...) resolved via webpack's require functionality:
            'sass-loader?indentedSyntax']
        })
      },
      {
        test: /\.vue$/,
        // Rule.loader is a shortcut to Rule.use: [ { loader } ]
        loader: 'vue-loader', //transforms Vue components into a plain JavaScript module:
        options: {
          extractCSS:true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        // All loaders are sorted in the order pre, inline, normal, post and used in this order.
        enforce: "pre", //check source files, not modified by other loaders (like babel-loader)
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          //rules can be configured at .eslintrc.js file in this project

        }
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
    }),
    new ExtractTextPlugin("/styles.css?[hash]")
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
