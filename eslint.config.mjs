import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([

  {
     languageOptions: { globals: {...globals.browser, ...globals.node} }
  },
  {
    rules: {
      indent: [
        "error", 2
      ],//отступы 4
      semi: [
        "error","always"
      ],//точка с запятой авто простав
        "no-used-vars":"off",
        "no-console":"off",
        "no-var":"error",
      quotes: [
        "error", "double"
      ]
    }
  },
  {
      files: ["**/*.{js,mjs,cjs}"],
      plugins: { js },
      extends: ["js/recommended"]
  },
  {
    ignores: [
      'dist/*', '*.json', '*/__tests__', 'coverage/*', '*.mjs'
    ]
  },
]);

