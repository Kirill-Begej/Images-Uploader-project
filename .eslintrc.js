module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: ['@babel/preset-env'],
    },
  },
  extends: [
    'plugin:import/recommended',
    'airbnb-base',
  ],
  rules: {
    'import/no-unresolved': 0,
  },
};
