module.exports = function babel(api) {
    if (api) {
        api.cache.forever()
    }

    return {
        presets: [
            "@babel/preset-env",
            "@babel/preset-react"
        ],
        plugins: [
            "@babel/plugin-proposal-optional-chaining"
        ]
    }
}
  