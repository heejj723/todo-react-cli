module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  // ES LINT RULE 참고 링크 : https://eslint.org/docs/rules/
  rules: {
    'max-len': ['error', {code: 120}],
    'linebreak-style': 'off', // 개발 OS에 맞는 개행처리를 위해 off
    indent: 'off', // prettier 기준으로 자동 포메팅하므로 eslint indent는 off
    'react/jsx-indent': 'off', // prettier 기준으로 자동 포메팅하므로 eslint reatc/jsx-indent는 off
    'arrow-parens': 'off', // Bad (a) => {},  Good a => {} 인데 큰 문제 없으므로 off
    'object-curly-spacing': 'off', // 괄호 사이에 공간 off
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}], // jsx 태그가 jsx파일 외에도 js 파일 내에 있는걸 허용
    'no-use-before-define': 'off', // 정의 전에 변수 사용하지 못하게 하는걸 off, ComponentConventionTemplate 참고
    'react/jsx-curly-brace-presence': 'off', // jsx 태그 시작/끝 부분엔 항상 괄호를 넣는것 off
    'react/jsx-boolean-value': 'off', // jsx 안에 있는 변수의 true값을 항상 명시적으로 표기하는것 off
    'react-native/no-inline-styles': 'off', // jsx 태그 내에 스타일은 react에서 className 를 쓰는게 원칙이나 기존 웹에서 쓰듯 style 태그를 사용하도록 off
    'import/extensions': 'off', // import에 확장자쓰기 off
    'implicit-arrow-linebreak': 'off', // 명시적으로 arrow function 뒤에 개행이 있는게 좋지만 큰 상관 없어서 off
    'react/jsx-curly-newline': 'off', // jsx 괄호 안에 내용에 개행을 하는게 좋으나 큰 상관 없어서 off
    'no-return-await': 'off',
    'operator-linebreak': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-pascal-case': 'off', // TODO: DELETE!! 리액트 컴포넌트 첫글자는 대문자를 쓰는게 좋으나 이미 소문자로 쓰는게 많아서 off
    'no-underscore-dangle': 'off', // TODO: DELETE!! 변수명에 언더바
    'no-console': 2, // TODO: DELETE!! console.log같은거 사용금지 (0: off, 1: warn, 2: error)
    'import/no-unresolved': 'off', // directory별 package.json 생성을 통한 import 경로 설정을 위해 dependency 없는 import를 위해 off
    'react/jsx-props-no-spreading': 'off', //비구조화 할당 문법 사용하기 위해 off
    'no-nested-ternary': 'off', //3항 연산 문법 사용하기 위해 off
    'no-confusing-arrow': 'off', //prettier 충돌로인해 off
    // directory별 package.json 생성을 통한 import 경로 설정을 위해 dependency 없는 import를 위해 off
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: ['./src/res/', './src/stores/', './src/network', './src/components/', './'],
      },
    ],
    'object-curly-newline': 'off', // 괄호 사이에 공간 off
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-wrap-multilines': 'off',
  },
};