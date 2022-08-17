const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../dist',
  indexPath: '../index.html',
  publicPath: process.env.NODE_ENV === 'production' ? 'dist/' : './'
})
