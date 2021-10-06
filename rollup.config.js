import pkg from './package.json'

const config = {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
        strict: false
      }
    ],
    plugins: [],
    external: ['react', 'react-dom']
  }

export default config