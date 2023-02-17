module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  testEnvironment: 'jsdom',
  reporters: ["default", "jest-junit"],
  transform: {
    '^.+\\.md?$': 'markdown-loader-jest'
  },
  moduleFileExtensions: [ 'ts', 'js', 'md' ]
};
