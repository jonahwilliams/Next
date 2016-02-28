import { rollup } from "rollup";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";
import babel from "rollup-plugin-babel";

rollup({
  entry: "../src/client/index.js",
  plugins: [
    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    babel(),
    uglify()
  ]
}).then(
  (bundle) => {
    bundle.write({dest: "../dist/client/index.js", format: 'iife'})
  });
