import filesize from 'rollup-plugin-filesize';
import {terser} from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/pubsub.js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'CIRCULAR_DEPENDENCY') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    resolve(),
    terser({
      warnings: true,
      mangle: {
        module: true,
      },
    }),
    filesize({
      showBrotliSize: true,
    })
  ]
}