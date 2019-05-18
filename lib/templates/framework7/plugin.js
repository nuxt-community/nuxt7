// import Vue from 'vue'
import Framework7 from 'framework7/framework7.esm.bundle'
import Framework7Vue from 'framework7-vue'
import routes from './routes'
import './components'

// Register F7Vue plugin for F7
Framework7.use(Framework7Vue);

// Register plugin
export default async function framework7({ app, route }, inject) {
  // Framework7 options
  app.framework7 = {
    routes,
    app: <%= JSON.stringify(options.app) %>,
    main: <%= JSON.stringify(options.main) %>
  }

  const { theme } = route.query
  if (['md', 'ios', 'aurora'].includes(theme)) {
    app.framework7.app.theme = theme
  }
}

