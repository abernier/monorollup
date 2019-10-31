import path from 'path';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
//import { uglify } from 'rollup-plugin-uglify';

const NODE_ENV = process.env.NODE_ENV || "development";

const cwd = process.cwd();
console.log('cwd', cwd);

//const pkg = require(path.resolve(cwd, "package.json"));

const input = path.resolve(cwd, `index.js`);
const output = path.resolve(cwd, `dist/index.js`);
const output2 = path.resolve(cwd, `dist/index.esm.js`);

export default {
  input,
  output: [
    {
      file: output,
      format: "cjs",
      //sourcemap: true
    },
    {
      file: output2,
      format: "esm",
      //sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    
    // https://rollupjs.org/guide/en/#babel
    babel({
      exclude: /node_modules/, // only transpile our source code (node_modules are supposed to be plain-JS files)
      rootMode: "upward",
      //sourceMaps: true
    }),
    
    resolve(), // https://rollupjs.org/guide/en/#rollup-plugin-node-resolve
    
    commonjs(), // https://rollupjs.org/guide/en/#rollup-plugin-commonjs
    
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    })
  ]
}