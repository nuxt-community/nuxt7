// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import { Framework7Vue } from 'framework7-vue'

// Import F7 Theme Styles
import 'framework7-css'

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Routes
import routes from '~/f7/routes'

// Register plugin
export default async function framework7({ app }, inject) {
    app.framework7 = {
        // Router Options
        view: {
            pushState: true,
            pushStateSeparator: '',
            pushStateRoot: document.origin
        },
        // Main routes
        routes,
    }
}

