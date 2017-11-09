import Vue from 'vue'
import { Framework7Vue } from 'framework7-vue'

import { routes } from './f7-router'
import Framework7VueComponents from './f7-components'

// Async import F7 core
const _Framework7 = import('framework7/dist/js/framework7.esm.bundle'/* webpackChunkName: f7 */).then(m => m.default)

// Register F7 Vue Components
Vue.use(Framework7VueComponents)

// Register plugin
export default async function framework7({ app }, inject) {
    // Register F7 Vue Plugin
    const Framework7 = await _Framework7
    Vue.use(Framework7Vue, Framework7)

    // Framework7 options
    app.framework7 = <%= serialize({mode: options.mode,view: options.view}).replace(/"__([^_]+)__"/g,"$1") %>

    // Routes
    app.framework7.routes = routes
}

