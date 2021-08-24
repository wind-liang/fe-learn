const path = require('path');
module.exports = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    // 引入模块的时候可以省略这些后缀
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
