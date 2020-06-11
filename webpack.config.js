const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isGH = !!process.env.GH_PAGES

module.exports = {
  output: {
    library: "MyVueComponent",
    path: isGH ? path.resolve('./gh-pages') : undefined,
    publicPath: isGH ? '' : undefined
  },
  entry: isGH ? {
    'index': './demo/index.js'
  } : undefined,
  plugins: isGH ? [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo/index.html')
    })
  ] : [],
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
}
