const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	
  entry: {
    app: './src/js/index.js',
  },
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  devtool: 'source-map',
 // devServer: {
 //   contentBase: './dist'
 // },
 
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
		  {
			loader: "css-loader",
			options: { minimize: true }
          },
		  {
			loader: 'postcss-loader',
		  },
		  {
			loader: "sass-loader",
          }
        ]
      },
    ]
  },
  
  plugins: [
    new CleanWebpackPlugin(['dist']),
	
    new HtmlWebpackPlugin({
/* 	  minify: {
        collapseWhitespace: true
      }, */
	  template: 'src/html/index.html'
    }),
	
	new MiniCssExtractPlugin({
      filename: "style.css",
    }),
	
	new CopyWebpackPlugin([
		{
			from: './src/img/',
			to: 'img/[name].[ext]',
		}
	]),
  ],

  

};