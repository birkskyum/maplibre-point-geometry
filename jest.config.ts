import type {InitialOptionsTsJest} from 'ts-jest';

const config: InitialOptionsTsJest = {
    roots: [
        '<rootDir>/src',
    ],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts-esm',
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    },
};

export default config;
