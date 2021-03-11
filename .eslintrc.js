module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 추가
    "indent": [ "error", 2 ],
    "space-in-parens": [ "error", "always", { "exceptions": [ "{}", "[]"] }],
    "object-curly-spacing": [ "error", "always" ],
    "object-curly-newline": [ "error", { "multiline": true } ],
    "array-bracket-spacing": [ "error", "always" ],
    "comma-dangle": [ "error", { "arrays": "always-multiline", "objects": "always-multiline", "imports": "never", "exports": "never", "functions": "never" } ],
    "max-len": ["error", { "code": 500 }],
    "semi": [ "error", "always" ]
  },
};