import rspack from '@rspack/core'
import refreshPlugin from '@rspack/plugin-react-refresh'
const isDev: boolean = process.env.NODE_ENV === 'development'
import { Configuration } from '@rspack/cli'
import path from 'path'
const config: Configuration = {
  context: __dirname,
  entry: {
    main: './src/main.tsx'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset'
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: 'typescript',
                  tsx: true
                },
                transform: {
                  react: {
                    runtime: 'automatic',
                    development: isDev,
                    refresh: isDev
                  }
                }
              },
              env: {
                targets: [
                  'chrome >= 87',
                  'edge >= 88',
                  'firefox >= 78',
                  'safari >= 14'
                ]
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: {
                  'postcss-windicss': {}
                }
              }
            }
          }
        ],
        type: 'css'
      }
    ]
  },
  plugins: [
    new rspack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: './index.html'
    }),
    isDev ? new refreshPlugin() : undefined
  ].filter(Boolean)
}

export default config
