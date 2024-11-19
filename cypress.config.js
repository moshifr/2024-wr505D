const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseUrl: 'http://localhost:5050',
  "video": false,
  e2e: {
    "componentFolder": "src",
    specPattern: '**/__tests__/*.{cy,spec}.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:5050'
  },
  component: {
    "componentFolder": "src",
    specPattern: '**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
})
