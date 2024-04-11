import { defineConfig } from 'dumi'
import { author, repository, version } from './package.json'
// eslint-disable-next-line unused-imports
const isProduction = process.env.NODE_ENV === 'production'
const isWin = process.platform === 'win32'
const logo: string = 'https://www.h7ml.cn/logo.svg'
const themeConfig = {
  name: '@dext7r/ui',
  github: repository.url.split('.git')[0],
  logo,
  nav: [
    {
      title: '起步',
      link: '/guide',
    },
    {
      title: '组件库',
      link: '/components',
    },
  ],
  footer: false,
  socialLinks: {
    github: repository.url.split('.git')[0],
  },
  apiHeader: {
    docUrl: `{github}/tree/master/packages/docs/src/components/{atomId}/index.md`,
    match: ['/components/'],
    pkg: '@dext7r/ui',
    sourceUrl: `{github}/tree/master/packages/docs/src/components/{atomId}/index.ts`,
  },
}
const config = {
  styles: [
    `html, body { background: transparent;  }

  @media (prefers-color-scheme: dark) {
    html, body { background: #0E1116; }
  }`,
  ],
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  themeConfig,
  resolve: {
    // 设置横向导航栏
    atomDirs: [
      { type: 'hooks', dir: 'src/hooks' },
      { type: 'utils', dir: 'src/utils' },
    ],
  },
  outputPath: 'docs-dist',
  // apiParser: isProduction ? {} : false,
  // resolve: isProduction
  //   ? {
  //       entryFile: './src/index.ts',
  //     }
  //   : undefined,
  // analyze: {
  //   enable: true,
  //   analyzerPort: 8888,
  // },
  base: '/',
  define: {
    'process.env': process.env,
  },
  // demo: {
  //   lazyLoading: true,
  // },
  // showLineNum: true,
  // nprogress: true,
  // prefersColor: { default: 'auto', switch: true },
  // editLink: true,
  // lastUpdated: true,
  // rtl: true,
  mfsu: isWin ? undefined : {},
  npmClient: 'pnpm',
  publicPath: '/',
  cacheDirectoryPath: './node_modules/.cache',
  chainWebpack(
    memo: {
      plugin: (arg0: string) => {
        (): any
        new (): any
        use: { (arg0: any, arg1: { banner: string }[]): void, new (): any }
      }
    },
    // eslint-disable-next-line unused-imports
    { env, webpack }: any,
  ) {
    memo.plugin('copyright').use(webpack.BannerPlugin, [
      {
        banner: `Version: ${version} - © ${new Date().getFullYear()} ${
          author.name
        } <${author.mail}>. All rights reserved.`,
      },
    ])
  },
  clickToComponent: {
    editor: 'vscode',
  },
  conventionLayout: true,
  html2sketch: {},
  analytics: {
    // google analytics 的 key (GA 4)
    ga_v2: 'G-QZLQV8KRND',
    // 百度统计的 key
    baidu: '7cd6e5c368ce90c5f557d5770d437d4a',
  },
  sitemap: { hostname: 'https://doc.h7ml.cn' },
  favicons: ['https://www.h7ml.cn/logo.svg'],
  headScripts: [
    {
      src: '//sdk.51.la/js-sdk-pro.min.js?id=K9Jv3fShRp5JWNEa&ck=K9Jv3fShRp5JWNEa&autoTrack=true&hashMode=true',
      charset: 'utf-8',
      id: 'LA_COLLECT',
    },
  ],
} as any
export default defineConfig(config)
