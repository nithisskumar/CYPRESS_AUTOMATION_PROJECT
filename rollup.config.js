import { nodeResolve } from '@rollup/plugin-node-resolve'; // This plugin allows Rollup to resolve node_modules dependencies
import commonjs from '@rollup/plugin-commonjs'; // This plugin allows Rollup to handle CommonJS modules

export default {
  input: 'src/main.js', // The entry point of your application
  output: {
    file: 'dist/bundle.js', // The output file where the bundled code will be written
    format: 'iife', // The format of the output bundle (e.g., IIFE, CommonJS, ES module)
    sourcemap: true, // Generate sourcemaps for debugging
  },
  plugins: [
    nodeResolve(), // Resolve node_modules dependencies
    commonjs(), // Convert CommonJS modules to ES modules, if necessary
  ],
};
