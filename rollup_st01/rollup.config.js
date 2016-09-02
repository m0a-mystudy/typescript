// import nodeResolve from 'rollup-plugin-node-resolve'
// import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'



export default {
  entry: './src/app.ts',
  dest: './dist/app.js',
  format: 'umd',
  plugins: [
    typescript()
  ]
}
