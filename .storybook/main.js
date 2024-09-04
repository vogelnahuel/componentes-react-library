// .storybook/main.js
module.exports = {
  stories: ['../src/stories/**/*.stories.jsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    });

    config.resolve.extensions.push('.js', '.jsx');

    return config;
  },
};
