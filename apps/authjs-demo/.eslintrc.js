module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '@code-shaper/eslint-config/strict-react',
    'next/core-web-vitals',
    'plugin:@dword-design/import-alias/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      /*
       * Fix issues with shadcn components
       * See here: https://github.com/shadcn-ui/ui/issues/120#issuecomment-1828081539
       */
      files: ['**/components/ui/*.tsx'],
      rules: {
        'react/prop-types': [
          2,
          {
            ignore: ['checked', 'className', 'position', 'sideOffset', 'type'],
          },
        ],
        'react-refresh/only-export-components': 'off',
      },
    },
    {
      files: ['src/db/schema.ts'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
  rules: {
    '@dword-design/import-alias/prefer-alias': [
      'error',
      {
        alias: {
          '@': './src/',
        },
      },
    ],
  },
};
