const fs = require('fs');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: () => {
    const wcPath = path.resolve(__dirname, 'src/components');

    const entries = {
      index: path.resolve(__dirname, 'src', 'index.ts'),
    };

    fs.readdirSync(wcPath, { withFileTypes: true })
      .filter(item => item.isDirectory() && fs.existsSync(path.resolve(wcPath, item.name, 'index.ts')))
      .forEach(item => {
        entries[item.name] = path.resolve(wcPath, item.name, 'index.ts');
      });

    return entries;
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: [{
          loader: 'lit-scss-loader',
          options: {
            minify: true,
          },
        }, 'extract-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
};
