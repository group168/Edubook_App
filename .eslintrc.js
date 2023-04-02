module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node':true
  },
  // code tuân thủ các quy ước phổ biến của JS
  'extends': 'eslint:recommended',
  'parserOptions': {
    // hỗ trợ module
    'sourceType': 'module',
    'ecmaVersion': 2021
  },
  'rules': {
    // yêu cầu thụt dòng 2 khoảng trắng
    'indent': ['error', 2],
    // 'linebreak-style': ['error', 'unix'],
    // yeu cau kí tự sử dụng dấu ' ' thay vì dùng cả ""
    'quotes': ['error', 'single'],
    // sử dụng dấu ; sau mỗi câu lệnh
    'semi': ['error', 'always'],
    //cảnh báo nếu không có dấu cách sau dấu phẩy
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    //cảnh báo khi sử dụng console.log nhưng cho phép dùng console.warn and error
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    // quy tắc dùng {} trên cả if và else
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    // biến không được sử dụng
    'no-unused-vars': 'warn',
    // k sử dụng cả tab và space để thụ lề
    'no-mixed-spaces-and-tabs': 'warn',
    //không để khoảng trắng cuối dòng
    'no-trailing-spaces': 'warn',
  }
};