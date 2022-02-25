module.exports = {
    root: true,
    env: {
        node: true
    },
    // 指定如何解析语法
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 指定ESlint的解析器
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        // 允许使用import
        sourceType: 'module',
        // 允许解析JSX
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ['plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['prettier', '@typescript-eslint'],
    rules: {
        'vue/multi-word-component-names': 0
    },
    ignorePatterns: ['dist']
}
