import "./publicPath.js";
import rspack from "@rspack/core";
import refreshPlugin from "@rspack/plugin-react-refresh";
const isDev: boolean = process.env.NODE_ENV === "development";
import { Configuration } from "@rspack/cli";

import path from "path";
const config: Configuration = {
  context: __dirname, // 基础目录：该选项用于设置 Rspack 构建时所依赖的基础路径。
  entry: "./src/main.tsx", // 入口文件：该选项用于设置 Rspack 构建时所依赖的入口文件。单个入口
  mode: isDev ? "development" : "production", // 模式：该选项用于设置 Rspack 的构建模式，以启用对应模式下的默认优化策略。
  output: {
    // 输出：该选项用于指示 Rspack 如何以及在哪里输出生成的文件内容。
    assetModuleFilename: "[hash][ext][query]", // 静态资源文件名：该选项用于设置 Rspack 如何命名构建出的静态资源文件。
    filename: (pathData) => {
      return pathData?.chunk?.name === "main"
        ? "[name].js"
        : "[name]/[name].js";
    },
    // 入口文件名：该选项用于设置 Rspack 如何命名构建出的入口文件。
    publicPath: "/", // 公共路径：该选项用于设置 Rspack 如何处理构建出的文件中的 URL。
    path: path.resolve(__dirname, "dist"), // 输出目录：该选项用于设置 Rspack 构建出的文件应该被写入到的目录。
    chunkFilename: "[id].chunk.js", // 代码块文件名：该选项用于设置 Rspack 如何命名构建出的代码块文件。
  },
  optimization: {
    minimize: process.env.NODE_ENV === "production",
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        format: {
          comments: false,
        },
      }),
      new rspack.SwcCssMinimizerRspackPlugin(),
    ],
    splitChunks: {
      chunks: "async",
      minChunks: 1,
      minSize: 20000,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  devServer: {
    allowedHosts: "auto",
    client: {
      logging: "info",
      overlay: true,
      progress: true,
      reconnect: true,
      webSocketTransport: "ws",
      webSocketURL: {},
    },
    compress: true,
    devMiddleware: {},
    historyApiFallback: {
      index: "/",
    },
    host: "127.0.0.1",
    hot: true,
    liveReload: true,
    magicHtml: true,
    open: true,
    port: 8888,
    server: "http",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: "asset",
      },
      {
        test: /\.(jsx?|tsx?)$/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              sourceMap: true,
              jsc: {
                parser: {
                  syntax: "typescript",
                  tsx: true,
                },
                transform: {
                  react: {
                    runtime: "automatic",
                    development: isDev,
                    refresh: isDev,
                  },
                },
              },
              env: {
                targets: [
                  "chrome >= 87",
                  "edge >= 88",
                  "firefox >= 78",
                  "safari >= 14",
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  "postcss-windicss": {},
                },
              },
            },
          },
        ],
        type: "css",
      },
    ],
  },
  plugins: [
    new rspack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    new rspack.ProgressPlugin({}),
    new rspack.HtmlRspackPlugin({
      template: "./index.html",
    }),
    isDev ? new refreshPlugin() : undefined,
    new rspack.CopyRspackPlugin({
      patterns: [
        {
          from: "public",
        },
      ],
    }),
  ].filter(Boolean),
};

export default config;
