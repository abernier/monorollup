import path from 'path'
import builtins from 'builtin-modules'

import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const NODE_ENV = process.env.NODE_ENV || "development";

const cwd = process.cwd();
// console.log('cwd', cwd);

const pkg = require(path.resolve(cwd, "package.json"));

const input =  path.resolve(cwd, pkg.src || `index.js`); // `index.js` as our default entrypoint (if not specified in the `rollup` command)

const output1 = path.resolve(cwd, pkg.main || `dist/index.cjs.js`); // CJS
const output2 = path.resolve(cwd, pkg.module || `dist/index.esm.js`); // ESM

// External: do not include those module into the bundle (see: https://rollupjs.org/guide/en/#peer-dependencies)
const external = [
  ...builtins,
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {})
];

export default {
  input,
  output: [
    {
      file: output1,
      format: "cjs",
      // sourcemap: true,
      exports: 'auto' // to disable warning, see: https://rollupjs.org/guide/en/#outputexports
    },
    {
      file: output2,
      format: "esm",
      //sourcemap: true,
    }
  ],
  external,
  plugins: [
    // https://github.com/rollup/plugins/tree/master/packages/babel
    babel({
      exclude: /node_modules/, // only transpile our source code (node_modules are supposed to be plain-JS files)
      babelHelpers: 'runtime', // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
      presets: [
        "@babel/preset-env",
        "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-transform-runtime",
        // "@babel/plugin-proposal-optional-chaining"
      ]
    }),
    
    nodeResolve(), // https://rollupjs.org/guide/en/#rollup-plugin-node-resolve
    
    commonjs(), // https://rollupjs.org/guide/en/#rollup-plugin-commonjs
    
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    })
  ]
}