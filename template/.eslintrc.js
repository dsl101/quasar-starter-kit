module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module'
  },

  env: {
    browser: true
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:quasar/standard',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],

  plugins: [],
  'settings': {
    'import/resolver': 'webpack'
  },

  globals: {
    'APP_VERSION': 'readonly',
    '__dirname': 'readonly',
    'module': 'writable',
    'process': 'readonly',
    'require': 'readonly'
  },

  rules: {
    // Quasar
    'vue/order-in-components': 'off',
    'no-shadow': ['error', { 'builtinGlobals': true, 'hoist': 'functions', 'allow': [] }],
    'generator-star-spacing': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'off',

    // Allow v-for and v-if when not trivial to replace
    'vue/no-use-v-if-with-v-for': ['error', {
      'allowUsingIterationVar': true
    }],

    'vue/no-parsing-error': ['error', {
      // For {{ a < b ? 'thing1' : 'thing2' }}
      // See https://github.com/vuejs/eslint-plugin-vue/issues/370
      "invalid-first-character-of-tag-name": false
    }],
    'vue/mustache-interpolation-spacing': 'off',
    'vue/attributes-order': ['error', { order: [
      'DEFINITION',  // is
      'LIST_RENDERING',  // v-for
      'CONDITIONALS',  // v-if
      'RENDER_MODIFIERS',  // v-once
      'UNIQUE',  // ref
      'GLOBAL',  // id
      'SLOT',  // slot / v-slot
      'TWO_WAY_BINDING',  // v-model
      'OTHER_DIRECTIVES',  // v-close-overlay
      'OTHER_ATTR',  // class="xyz" / :prop
      'EVENTS',  // @event
      'CONTENT',  // v-html
    ]}],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 6,
      'multiline': {
        'max': 3,
        'allowFirstLine': true
      }
    }],
    'vue/html-indent': ['warn', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'alignAttributesVertically': false,
      'ignores': []
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': ['error', {
        'ignoreWhenEmpty': true,
        'allowEmptyLines': true
    }],
    'vue/no-unused-properties': ['error', {
      'groups': [ 'props', 'data', 'computed', 'methods' ],
      'deepData': true,
      'ignorePublicMembers': true
    }],
    'no-multiple-empty-lines': ['warn', {
      'max': 2
    }],
    'require-atomic-updates': 'off',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : ["warn", { allow: ["warn", "error"] }],
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  }
}
