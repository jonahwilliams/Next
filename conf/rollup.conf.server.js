import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

export default {
  entry: "./src/server/index.js",
  format: 'cjs',
  plugins: [
    babel()
  ],
  dest: "./dist/server/index.js"
}
