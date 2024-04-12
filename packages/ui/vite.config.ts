import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import typescript from "@rollup/plugin-typescript";
import type { Plugin } from "vite";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: "es5",
      rootDir: resolve("packages/"),
      declaration: true,
      declarationDir: resolve("dist"),
      exclude: resolve("node_modules/**"),
      allowSyntheticDefaultImports: true,
    }) as Plugin, // 使用类型断言指定正确的类型
  ],
  server: {
    port: 8000,
  },
  build: {
    outDir: "dist",
    cssTarget: "chrome61",
    lib: {
      entry: resolve("packages/index.ts"),
      name: "@dext7r/ui",
      fileName: "shark-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "react",
          "react-dom": "react-dom",
        },
      },
    },
  },
});
