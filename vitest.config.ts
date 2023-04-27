/*
 * @Author: moemoefish moemoefish@qq.com
 * @Date: 2023-04-10 19:09:17
 * @LastEditors: moemoefish moemoefish@qq.com
 * @LastEditTime: 2023-04-27 19:28:23
 * @Description: 
 */
import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src'))
      }
    }
  })
)
