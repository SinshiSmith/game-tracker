module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["eslint:recommended", "eslint-config-airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-import",
    "eslint-plugin-react-hooks",
    "@emotion",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [0],
    quotes: [2, "double"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    "react/prop-types": [0],
    "react/button-has-type": [0],
  },
};
