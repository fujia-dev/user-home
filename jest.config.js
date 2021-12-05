module.exports = {
  // roots: [
  //   '<rootDir>/__tests__'
  // ],
  // testEnvironment: 'jsdom', // default - node.js
  // testRegex: 'tests/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
