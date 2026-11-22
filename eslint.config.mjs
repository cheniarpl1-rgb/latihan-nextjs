import next from "eslint-config-next";

const eslintConfig = [
  ...next,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@next/next/no-img-element": "off",
      "@next/next/no-html-link-for-pages": "off",
      "prefer-const": "off",
      "import/no-anonymous-default-export": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/purity": "off",
    },
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
  },
];

export default eslintConfig;
