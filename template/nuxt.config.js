module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/pwa'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: '<%= name %>',
    description: '<%= description %>'
  },

  // Framework7 Config
  framework7: {
    // ...
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
