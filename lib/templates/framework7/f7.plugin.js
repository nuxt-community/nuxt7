import Vue from 'vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import { routes } from './f7.router'
import Framework7VueComponents from './f7.components'

// Framework7 Styles
<% if (options.css) { %>import './f7.styles.less'<% } %>
<% if (options.f7IconsSrc) { %>import '../<%= relativeToBuild(resolvePath(options.f7IconsSrc)) %>'<% } %>
<% if (options.mdIconsSrc) { %>import '../<%= relativeToBuild(resolvePath(options.mdIconsSrc)) %>'<% } %>

// Register F7 Vue Components
Vue.use(Framework7VueComponents)

// Register F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)

// Register plugin
export default async function framework7({ app }, inject) {
  // Framework7 options
  app.framework7 = <%= serialize(options.plugin).replace(/"__([^_]+)__"/g, "$1") %>

  // Routes
  app.framework7.routes = routes
}

