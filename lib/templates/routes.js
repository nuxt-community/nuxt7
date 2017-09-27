<%
function recursiveRoutes(routes, tab, components) {
  let res = ''
  routes.forEach((route, i) => {
    // Customize route
    const cRoute = options.routes[route.name]
    if (cRoute) {
      Object.assign(route, cRoute)
    }
    route._name = '_' + hash(route.component)
    components.push({ _name: route._name, component: route.component, name: route.name, chunkName: route.chunkName })
    res += tab + '{\n'
    res += tab + '\tpath: ' + JSON.stringify(route.path.replace(/[\*\?]/g, '') + '/') + ',\n'
    res += tab + '\tcomponent: ' + route._name
    res += (route.name) ? ',\n\t' + tab + 'name: ' + JSON.stringify(route.name) : ''
    res += (route.children) ? ',\n\t' + tab + 'children: [\n' + recursiveRoutes(routes[i].children, tab + '\t\t', components) + '\n\t' + tab + ']' : ''
    res += (route.tabs) ? ',\n\t' + tab + 'tabs: ' + JSON.stringify(route.tabs) : ''
    res += '\n' + tab + '}' + (i + 1 === routes.length ? '' : ',\n')
  })
  return res
}
const _components = []

const _routes = recursiveRoutes(router.routes, '\t\t', _components)

%>

<% uniqBy(_components, '_name').forEach(route => { %>import <%= route._name %> from '<%= relativeToBuild(route.component) %>'
<% }) %>

export default [
<%= _routes %>
]