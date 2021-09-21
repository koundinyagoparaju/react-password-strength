// Karma configuration

module.exports = function(config) {
  config.set({
    autoWatch: false,
    colors: true,
    concurrency: Infinity,
    logLevel: config.LOG_INFO,
    port: 9876,
    singleRun: true,

    basePath: '',
    files: [
      'node_modules/es6-shim/es6-shim.js',
      'test/*.js',
    ],
    exclude: [],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-spec-reporter'
    ],

    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    reporters: ['spec'],
    preprocessors: {
      './test/*.js': 'webpack'
    },

    webpack: {
      mode: 'production',
      entry: './src/index.js',
      module: {
        rules: [
          {
            test: /\.js$/,
            include: [/src/, /test/],
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env'],
              plugins: ['@babel/plugin-proposal-class-properties']
            },
          }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
    },
    webpackMiddleware: {
      state: 'errors-only'
    }
  })
}
