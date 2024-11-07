import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: "./",
  server: {
    base: "./-/ui/",
    port: 3333,
  },
  resolve: {
    dedupe: ['monaco-editor']
  },
  esbuild: {
    target: 'es2016',
  },
  plugins: [tsconfigPaths({
    projects: ['.'],
  })]
})
