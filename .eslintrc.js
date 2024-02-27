module.exports = {
  //これを設定しているとこれよりも親フォルダを探しに行かなくなる
  root: true,
  env: {
    //console.logなどをしてもエラーが出なくなる
    browser: true,
    // ES20までの構文を使用してもエラーが出なくなる
    es2020: true,
    node: true,
  },
  parserOptions: {
    //importやexportなど使ってもエラーが出なくなる
    sourceType: 'module',
    // "ecmaVersion": 13,
    ecmaFeatures: {
      jsx: true, // JSXを有効にする
    },
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    //更新をしない変数にconst以外が使われていたらエラーが出るように
    // 'prefer-const': 'error',
    //未使用の変数があったらエラーが出ないようにする
    'no-unused-vars': 'off',
    //変数名がcamelCaseでない場合エラーが出ないようにする
  },
};
