/* eslint-disable @typescript-eslint/no-var-requires */
const aliases = require('./config/alias').reduce((acc, alias) => {
  acc[`^${alias.name}(.*)$`] = `<rootDir>${alias.path}$1`;
  return acc;
}, {});

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/__test__/setup.ts'],
  setupFiles: ['<rootDir>/src/__test__/helpers/libraries/reactRouterDom.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg|pdf|webp|xlsx)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    ...aliases,
  },
  testEnvironment: 'jsdom',
  resetMocks: true,
};
