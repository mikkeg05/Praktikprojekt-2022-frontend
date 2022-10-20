module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  settings: { react: { version: "detect" } },
  extends: [
    "standard",
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  plugins: [
    "jsx-a11y",
    "react",
    "react-hooks",
  ],
  globals: {
    JSX: true,
    cookieStore: true,
    unknown: true,
  },
  rules: {
    /**
     * Global rules
     */
    quotes: ["error", "double"], // Use double quote
    "jsx-a11y/anchor-is-valid": [ // Current workaround using <Link> with href-less <a> tags as child
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "no-unused-vars": "warn", // warn when vars are not in use
    "no-console": "error", // error when using console log.
    "prefer-const": "error", // use const where possible
    "comma-dangle": ["error", "always-multiline"], // require tailing commas
    "array-element-newline": [ // array formatting rule
      "error",
      {
        multiline: true,
        minItems: 3,
      },
    ],
    "array-bracket-newline": [ // array formatting rule pt 2
      "error",
      {
        multiline: true,
        minItems: 3,
      },
    ],
    "object-curly-newline": [ // object formatting rule
      "error",
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 5,
        },
        ImportDeclaration: "never",
        ExportDeclaration: "always",
      },
    ],
    "object-property-newline": "error", // object formatting rule 2
  },
  overrides: [
    {
      /**
       * Typescript rules
       */
      files: ["*.ts", "*.tsx"],
      plugins: ["@typescript-eslint"],

      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: { "@typescript-eslint/no-unused-vars": "error" },
    },
  ],
}
