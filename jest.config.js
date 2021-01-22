module.exports = {
      setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
      testPathIgnorePatterns: [ '<rootDir>/.next/', '<rootDir>/node_modules/' ],
      transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
      },
	  moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	    "^@pages(.*)$": "<rootDir>/pages$1",
	  },
	};