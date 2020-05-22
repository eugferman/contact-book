const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new PrettierPlugin({
      printWidth: 80,               // Specify the length of line that the printer will wrap on.
      tabWidth: 2,                  // Specify the number of spaces per indentation-level.
      useTabs: false,               // Indent lines with tabs instead of spaces.
      semi: true,                   // Print semicolons at the ends of statements.
      encoding: 'utf-8',            // Which encoding scheme to use on files
      extensions: [ ".js", ".ts" ]  // Which file extensions to process
    })
  ]
};
