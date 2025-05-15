import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([

  {
     languageOptions: { globals: {...globals.browser, ...globals.node} }
  },
  {
    ignores: [
      'dist/*', '*.json', '*/__tests__', 'coverage/*'
    ]
  },

  { files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  
]);

