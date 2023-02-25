module.exports = {
  env: { browser: true, node: true },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    _: true,
    $: true
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'max-len': ["error", { "code": 1000 }],
    "comma-dangle": "never",
    '@typescript-eslint/comma-dangle': "never",
    "semi": "never",
    "@typescript-eslint/semi": "never",
    "consistent-return": 0,
    "no-else-return": 0
  }
};
