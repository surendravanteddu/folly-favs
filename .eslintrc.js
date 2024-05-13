module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true
    },
    ignorePatterns: ["dist", ".eslintrc.js"],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "react-refresh"
    ],
    settings: { react: { version: "18.2" } },
    "rules": {
        "max-len": ["error", { code: 120, tabWidth: 4, ignoreUrls: true }],
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
        "indent": ["error", 4, {"SwitchCase": 1}],
    }
};
