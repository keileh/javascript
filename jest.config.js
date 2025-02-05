module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./scripts/setup.js'],
  roots: ['<rootDir>/projects'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': './scripts/jest-html-transformer.js',
  },
    "testEnvironment": "jsdom",
};
