module.exports = async ({ config, mode }) => {
  // https://webpack.js.org/configuration/resolve/#resolvemainfields

  config.resolve.mainFields = ['src', 'module', 'main']

  // Return the altered config
  return config
}
