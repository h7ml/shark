import antfu from "@antfu/eslint-config";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const isDev = process.env.NODE_ENV === "development";

export default antfu({
  formatters: true,
  react: true,
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
  plugins: {
    "simple-import-sort": simpleImportSort,
  },
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "simple-import-sort/imports": 0,
    "simple-import-sort/exports": 0,
    "import/first": 0,
    "import/newline-after-import": 0,
    "import/no-duplicates": 0,
    "node/prefer-global/process": 0,
    "yaml/indent": 0,
    "react-refresh/only-export-components": 0,
    "no-console": isDev ? "warn" : 0,
    "prefer-regex-literals": 0,
  },
});
