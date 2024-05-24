import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
	pluginJs.configs.recommended,
	pluginReactConfig,
	{
		languageOptions: { globals: { ...globals.browser, ...globals.node } },
		files: ["src/**/*.jsx"],
		rules: {
			"react/react-in-jsx-scope": 0,
			"react/prop-types": 0,
			"react/no-unescaped-entities": 0,
		},
	},
	{
		ignores: ["**/*.config.js"],
	},
];
