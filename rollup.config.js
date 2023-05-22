import eslint from "@rollup/plugin-eslint";
import json from "@rollup/plugin-json";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import { watch } from "rollup";
import del from "rollup-plugin-delete";
import { typescriptPaths } from "rollup-plugin-typescript-paths";

/** @type {import('rollup').RollupOptions} */
const options = {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
        {
            file: "dist/index.min.js",
            format: "iife",
            name: "MyLib",
            plugins: [terser()],
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        typescript(),
        typescriptPaths(),
        json(),
        eslint(),
    ],
};

export default options;
