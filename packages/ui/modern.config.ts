import {
  moduleTools,
  defineConfig,
  ModuleConfigParams,
  PartialBaseBuildConfig,
} from '@modern-js/module-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

import type { UserConfigExport } from '@modern-js/core';

function generateCopyRight(year: number, website: string) {
  return `/*
 © Copyright ${year} ${packageName} or one of its affiliates.
*/`;
}

const currentYear = new Date().getFullYear();
const packageName = '@dext7r/ui';
const copyRight = generateCopyRight(currentYear, packageName);
const tailwind = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './config/html/**/*.{html,ejs,hbs}'],
};
const baseConfig: PartialBaseBuildConfig = {
  jsx: 'transform',
  autoExternal: false,
  externals: [
    'react',
    'react-dom',
    'dayjs',
    'classnames',
    'fundebug-revideo',
    'fundebug-javascript',
    '@sentry/react',
    '@rollbar/react',
  ],
  umdGlobals: {
    'react-dom': 'ReactDOM',
    react: 'React',
    dayjs: 'dayjs',
    classnames: 'classNames',
    'fundebug-revideo': 'FundebugRevideo',
    'fundebug-javascript': 'FundebugJavascript',
    '@sentry/react': 'SentryReact',
    '@rollbar/react': 'RollbarReact',
  },
  banner: {
    js: copyRight,
    css: copyRight,
  },
  style: {
    tailwindcss:tailwind
  }
};

const config: UserConfigExport<ModuleConfigParams> = {
  plugins: [
    moduleTools(),
    tailwindcssPlugin()
  ],
  buildConfig: [
    {
      ...baseConfig,
      format: 'cjs',
      target: 'es6',
      sourceMap: false,
      buildType: 'bundleless',
      outDir: './dist/lib',
      dts: false,
    },
    {
      ...baseConfig,
      format: 'esm',
      target: 'es6',
      sourceMap: false,
      buildType: 'bundleless',
      outDir: './dist/es',
      dts: false,
    },
    {
      ...baseConfig,
      format: 'umd',
      target: 'es6',
      platform: 'browser',
      buildType: 'bundle',
      outDir: './dist/umd',
      dts: false,
    },
    {
      ...baseConfig,
      format: 'esm',
      sourceMap: true,
      buildType: 'bundleless',
      outDir: './dist/types',
      dts: {
        only: true,
      },
    },
  ],
  buildPreset: 'npm-library',
};

export default defineConfig(config);
