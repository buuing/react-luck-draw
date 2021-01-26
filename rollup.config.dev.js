import { name } from './package.json'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: [
    {
      file: `./dist/${name}.cjs.js`,
      format: 'cjs',
    },
  ],
  plugins: [
    babel(),
    resolve(),
    commonjs(),
    json(),
  ],
  external: ['react'],
}
