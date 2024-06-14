import path from 'path'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: '.',
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  })
)
