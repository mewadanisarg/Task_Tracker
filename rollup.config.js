//This file decreases the compiling time of the app...!!!! 
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: 'main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  plugins: [commonjs(),
            replace({'process.env.NODE_ENV': JSON.stringify('development')}),
            alias({resolve: ['.js'], vue: __dirname + '/node_modules/vue/dist/vue'})
          ]
}