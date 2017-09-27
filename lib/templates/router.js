import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    fallback: false,
    routes: [
		{
      name: 'main',
			path: '/:route?',
			component: App
		}
    ]
  })
}
