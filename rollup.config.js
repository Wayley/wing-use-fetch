import { terser } from "rollup-plugin-terser";
import babel from "rollup-plugin-babel";
const globals = { react: "React" };
export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/wing-use-fetch.js",
      name: "wing-use-fetch",
      format: "umd",
      globals,
    },
    {
      file: "dist/wing-use-fetch.es.js",
      format: "es",
      globals,
    },
    {
      file: "dist/wing-use-fetch.amd.js",
      format: "amd",
      globals,
    },
    {
      file: "dist/wing-use-fetch.cjs.js",
      format: "cjs",
      globals,
    },
  ],
  external: ["react"],
  plugins: [
    babel({ exclude: "**/node_modules/**", runtimeHelpers: true }),
    terser(),
  ],
};
