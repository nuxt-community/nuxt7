<%
function recursiveRoutes(routes, tab, components, parent) {
  let res = ''
  routes.forEach((route, i) => {
    route._name = '_' + hash(route.component)
    route._pathName = route.chunkName.replace('pages/','').replace('/','_')
    route._isTab = options.tabs.indexOf(route._pathName) !== -1 

    if (parent._isTab) {
      route.id = route.path.length ? route.path : 'index'
    }

    components.push({ _name: route._name, component: route.component, name: route.name, chunkName: route.chunkName })
    res += tab + '// ' + route.chunkName + '\n'
    res += tab + '{\n'
    res += tab + '\tpath: ' + JSON.stringify(route.path) + ',\n'
    res += tab + '\tcomponent: ' + route._name
    res += (route.name) ? ',\n\t' + tab + 'name: ' + JSON.stringify(route.name) : ''
    res += (route.id) ? ',\n\t' + tab + 'id: ' + JSON.stringify(route.id) : ''
    res += (route.children) ? ',\n\t' + tab + (route._isTab ? 'tabs' : 'routes') + ': [\n' + recursiveRoutes(routes[i].children, tab + '\t\t', components, routes[i]) + '\n\t' + tab + ']' : ''
    res += '\n' + tab + '}' + (i + 1 === routes.length ? '' : ',\n')
  })
  return res
}
const _components = []
const _routes = recursiveRoutes(router.routes, '\t\t', _components, router.routes)

%><% uniqBy(_components, '_name').forEach(route => { %>import <%= route._name %> from '<%= relativeToBuild(route.component) %>'
<% }) %>

export default [
<%= _routes %>
]