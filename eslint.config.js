import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    },
  },
  {
    plugins: {
      cypress: pluginCypress,
    },
  },
];