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
import routes from '~/f7/routes'

// Disable android contextmenu
window.oncontextmenu = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

// standalone polyfill for Android
if (window.navigator.standalone === undefined) {
    window.navigator.standalone = window.location.href.indexOf('standalone=true') > 0
}

// Detect Standalone mode
if (window.navigator.standalone && window.location.pathname !== '/') {
    // Redirect to home on startup (Fixes problems with IOS bookmarking)
    window.location = '/'
}

// Register plugin
export default async function framework7({ app }, inject) {
    // Check to fallback hash mode if origin is not available
    const origin = window.location.origin

    app.framework7 = {
        // Router Options
        view: {
            pushState: true,
            pushStateSeparator: origin ? '' : '#',
            pushStateRoot: origin
        },
        // Main routes
        routes,
    }
}

