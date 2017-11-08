// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import { Framework7Vue } from 'framework7-vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Register F7 Vue Components
import Framework7VueComponents from './f7-components'
Vue.use(Framework7VueComponents)

// Routes
import { routes } from './f7-router'

// Register plugin
export default async function framework7({ app }, inject) {
    // Framework7 options
    app.framework7 = <%= serialize(options).replace(/"__([^_]+)__"/g,"$1") %>

    // Routes
    app.framework7.routes = routes
}

