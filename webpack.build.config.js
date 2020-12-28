module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './dist/index.js',
    libraryTarget: 'umd',
    library: 'ReactPasswordStrength',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: /src/,
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties']
        },
      }, {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ],
  },
  externals: {
    'react': 'react'
  },
  resolve: {
    extensions: ['.js'],
  },
};
