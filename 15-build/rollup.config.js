import { nodeResolve } from "@rollup/plugin-node-resolve";
export default {
	input: "src/index.js",
	output: {
		// dir: "dist",
		file: "dist/bundle.js",
		// format: "iife",
		format: "cjs",
	},
	plugins: [nodeResolve()],
};
