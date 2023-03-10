/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      enabled: false,
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: '.coverage',
      excludeNodeModules: true,
      all: true,
      exclude: ['config/**', '**/*/*.test.ts'],
    },
  },
})
