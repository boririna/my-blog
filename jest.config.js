module.exports = {
	// The root of your source code, typically /src
	roots: ['<rootDir>/src'],

	// Jest transformations -- this adds support for JavaScript using Babel
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},

	// testEnvironment: 'jsdom',
	// Runs special logic, such as cleaning up components when using React Testing Library
	// setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

	// Test spec file resolution pattern
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',

	// Module file extensions for importing
	moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

	// Mock file or path for CSS modules
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.js',
	},

	// Indicates whether each individual test should be reported during the run
	verbose: true,
};
