import { defineConfig } from "eslint/config";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default defineConfig([
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      semi: ["warn"],
      quotes: ["warn", "double"],
      // "react-hooks/rules-of-hooks": ["error"],
      // "react-hooks/exhaustive-deps": ["warn"],
      // "@typescript-eslint/no-unused-vars": ["warn"],
      // "no-unused-vars": ["warn"],
      // "react/prop-types": ["off"],
      // "react/react-in-jsx-scope": ["off"],
      // "sort-keys": ["off"],
      // "one-var": ["off"],
      // "no-magic-numbers": ["off"],
      // "sort-imports": ["off"],
      // "camelcase": ["off"],
      // "new-cap": ["off"],
      // "no-ternary": ["off"],
      // "no-console": ["off"],
      // "no-inline-comments": ["off"],
      // "capitalized-comments": ["off"],
      // "line-comment-position": ["off"],
      // "multiline-comment-style": ["off"],
      // "react/display-name": ["off"],
      // "no-unused-expressions": ["off"],
      // "max-lines-per-function": ["off"]
    }
  })
]);
// "{
//   files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
//     plugins: { js },
//     extends: ["js/recommended"],
//     languageOptions: { globals: globals.browser },
//   },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     files: ["**/*.md"],
//     plugins: { markdown },
//     language: "markdown/commonmark",
//     extends: ["markdown/recommended"],
//   },
//   {
//     ignores: [
//    node_modules/**",
//    .next/**",
//    out/**",
//    build/**",
//    next-env.d.ts",
//    README.md",
//     ],
//   }
