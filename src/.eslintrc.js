module.exports = {
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    // Стиль кода
    'semi': ['error', 'always'], // точка с запятой обязательна
    'quotes': ['error', 'single'], // одинарные кавычки
    'indent': ['error', 2], // отступ — 2 пробела
    'no-unused-vars': ['warn'], // предупреждение о неиспользуемых переменных
    'no-console': 'off', // разрешаем console.log (можно включить на проде)
  },
};
