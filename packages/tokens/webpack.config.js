const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cijConfig = {
  name: 'css-in-js',
  mode: 'production',
  target: 'web',
  entry: () => {
    const cijPath = path.resolve(__dirname, 'src/css-in-js');

    const entries = {};

    fs.readdirSync(cijPath).forEach(file => {
      entries[file.replace(/\.(ts|js)$/g, '')] = path.resolve(cijPath, file);
    });

    return entries;
  },
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
    globalObject: 'this',
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
        exclude: /\.exports\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.exports\.(scss|sass)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                mode: 'icss',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};

const cssConfig = {
  name: 'css',
  mode: 'production',
  target: 'web',
  entry: () => {
    const cssPath = path.resolve(__dirname, 'src/css');

    const entries = {};

    fs.readdirSync(cssPath).forEach(file => {
      entries[file.replace(/\.scss$/g, '')] = path.resolve(cssPath, file);
    });

    return entries;
  },
  output: {
    path: path.resolve(__dirname, 'build/css'),
    filename: '[name].js',
    library: {
      type: 'umd',
    },
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

module.exports = [
  cijConfig,
  cssConfig,
];
