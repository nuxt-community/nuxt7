import type { NuxtConfig } from '@nuxt/types'
import nuxt7 from '../../src/module'

export default <NuxtConfig> {
  buildModules: [
    nuxt7,
    '@nuxtjs/pwa'
  ],
  loadingIndicator: false,
  build: {
    extractCSS: true
  },
  manifest: {
    name: 'Nuxt7',
    description: 'Nuxt7 PWA Demo'
  },
  framework7: {
    routes: {
      'tabs-routable': {
        tabs: [
          { path: '/', id: 'tab1', content: 'Tab Content 1' },
          { path: '/tab2/', id: 'tab2', content: 'Tab Content 2' },
          { path: '/tab3/', id: 'tab3', content: 'Tab Content 3' }
        ]
      }
    }
  },
  css: ['css/app.css'],
  hooks: {
    'generate:extendRoutes'(routes) {
      routes.splice(routes.findIndex(r => r.route === '/index.html'), 1)
    }
  }
}
