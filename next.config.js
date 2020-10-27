const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
  publicRuntimeConfig: {
    localeSubpaths,
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
}
