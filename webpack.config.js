module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/example',
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: /example/,
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties']
      },
    }],
  },
  resolve: {
    extensions: ['.js'],
  },
}
