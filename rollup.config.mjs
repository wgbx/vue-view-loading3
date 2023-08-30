import NodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import terser from '@rollup/plugin-terser'
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2'
import PluginVue from "rollup-plugin-vue"
import postcss from 'rollup-plugin-postcss'

const name = 'ViewLoading'

const globals = {
  vue: 'Vue',
}

export default {
  input: './packages/index.ts',
  output: [
    {
      name,
      file: `dist/${name}.es.min.js`,
      format: 'es',
      globals
    },
    {
      name,
      file: `dist/${name}.umd.js`,
      format: 'umd',
      globals,
      plugins: [terser()]
    },
  ],
  plugins: [
    PluginVue(),
    NodeResolve(),
    commonjs(),
    postcss(),
    typescript()
  ],
}
