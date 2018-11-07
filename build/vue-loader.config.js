module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
    }
  }
}