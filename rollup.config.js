import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import teaser from 'rollup-plugin-teaser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
    }
  ],
  plugins: [
    postcss(
        {
        plugins: [],
        minimize: true,
}),
    teaser(),
    external(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
  ],
};