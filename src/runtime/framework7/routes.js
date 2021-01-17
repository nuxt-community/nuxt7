<%
function recursiveRoutes(routes, tab, components) {
  let res = ''

  // Default route (404 page). MUST BE THE LAST
  const defaultRoute = routes.find(route => route.path === '/default')
  if (defaultRoute) {
    routes.push({
      ...defaultRoute,
      name: '_default',
      path: '(.*)'
    })
  }

  routes.forEach((route, i) => {
    // Customize route
    const cRoute = options.routes[route.name]
    if (cRoute) {
      Object.assign(route, cRoute)
    }

    // Fix path for F7
    if (route.name !== '_default') {
      route.path = route.path.replace(/[\*\?]/g, '')
    }

    // Fix tabs
    if (route.tabs) {
      route.path = (route.path + '/').replace(/\/\/$/, '/')
    }

    // add the router name
    route._name = '_' + hash(route.component)
    components.push({ _name: route._name, component: route.component, name: route.name, chunkName: route.chunkName })
    res += tab + '{\n'
    res += tab + '  name: ' + JSON.stringify(route.name) + ',\n'
    res += tab + '  path: ' + JSON.stringify(route.path) + ',\n'
    res += tab + '  component: ' + route._name
    res += (route.children) ? ',\n  ' + tab + 'routes: [\n' + recursiveRoutes(routes[i].children, tab + '    ', components) + '\n  ' + tab + ']' : ''
    res += (route.tabs) ? ',\n  ' + tab + 'tabs: ' + JSON.stringify(route.tabs) : ''
    res += '\n' + tab + '}' + (i + 1 === routes.length ? '' : ',\n')
  })
  return res
}
const _components = []

const _routes = recursiveRoutes(router.routes, '  ', _components)

%><%= uniqBy(_components, '_name').map(route =>
  `import ${route._name} from '${route.component}'`
).join('\n')
%>

export default [
<%= _routes %>
]
