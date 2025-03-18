import { defineConfig, mergeConfig } from 'vitest/config'

import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ['./setupTests.ts'],
      globals: true,
      environment: 'happy-dom',
    },
  })
)
