module.exports = {
    moduleFileExtensions: [ "js", "jsx", "ts", "tsx" ],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.jest.json",
            babelConfig: true,
            diagnostics: false,
        },
    },
    setupFilesAfterEnv: [ '<rootDir>/jest.setup.ts' ],
    testPathIgnorePatterns: [ '<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/cypress/' ],
    coverageReporters: [ "json", "lcov", "text", "text-summary" ],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "<rootDir>/test/mocks.ts",
        "\\.(css|less|sass|scss)$": 'identity-obj-proxy',
        "^@Element(.*)$": "<rootDir>/src/components/elements$1",
        "^@Layout(.*)$": "<rootDir>/src/components/layouts$1",
        "^@Module(.*)$": "<rootDir>/src/components/modules$1",
        "^@Template(.*)$": "<rootDir>/src/components/templates$1",
        "^@Constant(.*)$": "<rootDir>/src/constants$1",
        "^@Context(.*)$": "<rootDir>/src/context$1",
        "^@Hook(.*)$": "<rootDir>/src/hooks$1",
        "^@Util(.*)$": "<rootDir>/src/utils$1",
        "^@Style(.*)$": "<rootDir>/src/styles$1",
        "^@CustomType(.*)$": "<rootDir>/src/types$1",
        "^@Mock(.*)$": "<rootDir>/src/mocks$1",
        "^@Pages(.*)$": "<rootDir>/pages$1",
    },
    preset: "ts-jest",
};
