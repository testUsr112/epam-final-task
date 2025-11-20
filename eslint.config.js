import js from '@eslint/js';
import globals from 'globals';

export default [
    js.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
                browser: 'readonly',
                expect: 'readonly',
                $: 'readonly',
                $$: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                beforeEach: 'readonly',
                after: 'readonly',
                afterEach: 'readonly'
            }
        },
        linterOptions: {
            reportUnusedDisableDirectives: true
        },
        rules: {
            'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }]
        }
    }
];

