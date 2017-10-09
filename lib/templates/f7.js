// Import Vue
import Vue from 'vue'

// Import F7
import { Framework7 } from 'framework7'

// Import F7 Vue Plugin
import { Framework7Vue, f7View, f7Navbar, f7Page } from 'framework7-vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Register common components
Vue.component('f7-view', f7View)
Vue.component('f7-navbar', f7Navbar)
Vue.component('f7-page', f7Page)

// Routes
import { routes } from './f7-router'

// Register plugin
export default async function framework7({ app }, inject) {
    // Framework7 options
    app.framework7 = <%= serialize(options).replace(/"__([^_]+)__"/g,"$1") %>

    // Routes
    app.framework7.routes = routes
}

