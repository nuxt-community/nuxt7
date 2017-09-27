// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import { Framework7Vue, f7Navbar, f7Page } from 'framework7-vue'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

Vue.component('f7-navbar', f7Navbar)
Vue.component('f7-page', f7Page)

// Routes
import routes from './f7-routes'

// Disable android contextmenu
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

// Universal standalone check
// TODO

// Register plugin
export default async function framework7({ app }, inject) {
    // Framework7 options
    app.framework7 = <%= serialize(options).replace(/"__([^_]+)__"/g,"$1") %>

    // Routes
    app.framework7.routes = routes
}

