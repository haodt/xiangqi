module.exports = {
  setupFiles: ['<rootDir>/.jest/setup.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  watchPathIgnorePatterns: ['<rootDir>/.jest.json'],
};
