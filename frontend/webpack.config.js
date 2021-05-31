const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: ['./src/screens/home/index.js', './src/screens/home/index.scss'],
    login: ['./src/screens/login/index.js', './src/screens/login/index.scss'],
    score: ['./src/screens/score/index.js', './src/screens/score/index.scss'],
    battle: ['./src/screens/battle/index.js', './src/screens/battle/index.scss']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: "js/[name].js",
    publicPath:'./'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,            
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },            
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name].[ext]',
              publicPath: '../'
            }
          },
        ],
      },
      {
        test: /\.mp3$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/audio/[name].[ext]'
            }
          },
        ],
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        js: {
          test: /[\\/]node_modules[\\/]/,
          name: 'commons',
          chunks: 'all'
        },
        css : {
          test: /[\\/]node_modules[\\/]bootstrap[\\/]dist[\\/]css[\\/]/,
          name: 'commons',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'index.html',
      template: 'src/screens/home/index.html',
      chunks: ['index', 'commons']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'login.html',
      template: 'src/screens/login/index.html',
      chunks: ['login', 'commons']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'score.html',
      template: 'src/screens/score/index.html',
      chunks: ['score', 'commons']
    }),
    new HtmlWebpackPlugin({
      inject: 'head',
      filename: 'battle.html',
      template: 'src/screens/battle/index.html',
      chunks: ['battle', 'commons']
    }),
  ]
};