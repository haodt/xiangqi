module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
      },
    ],
    '@babel/react',
  ],
  ignore: ['node_modules'],
  env: {
    test: {
      presets: ['@babel/env', '@babel/react'],
    },
  },
};
