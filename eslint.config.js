const eslint = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");
const tsParser = require("@typescript-eslint/parser");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const path = require("path");

const projects = [
  path.resolve(__dirname, "tsconfig.json"),
  path.resolve(__dirname, "apps/*/tsconfig.json"),
  path.resolve(__dirname, "packages/*/tsconfig.json"),
];

module.exports = [
  // Ignore patterns
  {
    ignores: [
      "**/dist",
      "**/build",
      "**/.next",
      "**/node_modules",
      "eslint.config.js",
    ],
  },
  // Base ESLint recommended rules
  eslint.configs.recommended,
  // TypeScript files with parser and plugin
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: projects,
        tsconfigRootDir: __dirname,
      },
      globals: {
        process: "readonly",
        console: "readonly",
        React: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-undef": "off",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
      "import/no-named-as-default-member": "off",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: projects,
          noWarnOnMultipleProjects: true,
        },
      },
    },
  },
  // JS files (Node.js environment)
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: {
        node: true,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  // Disable some rules from eslint-config-prettier for TypeScript
  prettierConfig,
];
