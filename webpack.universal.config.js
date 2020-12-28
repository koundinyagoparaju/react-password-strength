var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/universal.js',
    libraryTarget: 'umd',
    library: 'ReactPasswordStrength',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        },
      }, {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader",
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('./dist/style.css'),
  ],
  externals: {
    'react': 'react',
  },
};
