import antfu from "@antfu/eslint-config";

const isDev = process.env.NODE_ENV === "development";

export default antfu({
  formatters: true,
  react: true,
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "node/prefer-global/process": 0,
    "yaml/indent": 0,
    "react-refresh/only-export-components": 0,
    "no-console": isDev ? "warn" : 0,
    "prefer-regex-literals": 0,
  },
});
