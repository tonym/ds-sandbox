import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
import * as pkgng from './coreng/package.json';

const baseContents = pkg => ({
  name: pkg.name,
  description: pkg.description,
  author: pkg.author,
  version: pkg.version,
  license: pkg.license,
  homepage: pkg.homepage,
  main: './node/opensesame-gemini.js',
  repository: pkg.repository,
  bugs: pkg.bugs,
  dependencies: {},
  peerDependencies: pkg.peerDependencies,
  peerDependenciesMeta: pkg.peerDependenciesMeta,
  module: pkgng.module,
  es2015: pkgng.es2015,
  esm2015: pkgng.esm2015,
  fesm2015: pkgng.fesm2015,
  typings: pkgng.typings,
  metadata: pkgng.metadata,
  sideEffects: false
});

const external = [
  '@angular/cdk/layout',
  '@angular/cdk/portal',
  '@angular/common',
  '@angular/core',
  '@angular/router',
  'jss',
  'jss-preset-default',
  'redux',
  'rxjs',
  'rxjs/operators'
];

const input = 'src/public-api.ts';

export default [
  {
    external,
    input,
    output: {
      dir: 'core',
      format: 'es'
    },
    plugins: [
      typescript(),
      nodeResolve(),
      commonjs(),
      copy({
        targets: [
          { src: 'coreng/fesm2015', dest: 'core' },
          { src: 'coreng/esm2015', dest: 'core' },
          { src: 'coreng/opensesame-gemini.d.ts', dest: 'core' },
          { src: 'coreng/opensesame-gemini.metadata.json', dest: 'core' }
        ]
      }),
      generatePackageJson({ baseContents })
    ]
  },
  {
    external,
    input,
    output: {
      file: 'core/node/opensesame-gemini.js',
      format: 'cjs',
      name: 'opensesame-gemini',
      plugins: [
        terser({
          compress: {
            drop_console: true
          },
          output: { quote_style: 1 }
        })
      ]
    },
    plugins: [typescript(), nodeResolve(), commonjs()]
  }
];
