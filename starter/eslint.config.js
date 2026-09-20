import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["**/*.{js,mjs,cjs}"],
        plugins: { js },
        extends: ["js/recommended"],
        languageOptions: { globals: globals.browser },
        rules: {
            "no-var": "error",
            "no-unused-vars": "error",
            semi: ["error", "always"],
            "no-console": "warn",
        },
    },
    {
        files: ["cypress/**/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser,
                cy: "readonly",
                beforeEach: "readonly",
                Cypress: "readonly",
                describe: "readonly",
                it: "readonly",
            },
        },
    },
    {
        files: ["test/**/*.js"],
        languageOptions: {
            globals: {
                describe: "readonly",
                it: "readonly",
                before: "readonly",
                after: "readonly",
                beforeEach: "readonly",
                afterEach: "readonly",
            },
        },
    },
]);
