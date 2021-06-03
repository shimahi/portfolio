const defaultConfig = {
  publicRuntimeConfig: {
    environment: process.env.NODE_ENV,
  },
  serverRuntimeConfig: {
    secret: process.env.SECRET,
    cmsKey: process.env.MICROCMS_API_KEY,
  },
}

const envConfigs = {
  stg: {
    publicRuntimeConfig: {
      ...defaultConfig.publicRuntimeConfig,
    },
    serverRuntimeConfig: {
      ...defaultConfig.serverRuntimeConfig,
    },
  },
  prod: {
    publicRuntimeConfig: {
      ...defaultConfig.publicRuntimeConfig,
    },
    serverRuntimeConfig: {
      ...defaultConfig.serverRuntimeConfig,
    },
  },
}

module.exports = process.env.NODE_ENV !== 'production' ? defaultConfig : envConfigs['prod']
