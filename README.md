<p align="center">
    <img src="https://github.com/nuxt-community/nuxt7/raw/master/.assets/nuxt7.png" alt="Nuxt7">
</p>

<p align="center">
<a href="https://david-dm.org/nuxt-community/nuxt7">
    <img alt="" src="https://david-dm.org/nuxt-community/nuxt7/status.svg?style=flat-square">
</a>
<a href="https://npmjs.com/package/nuxt7">
    <img alt="" src="https://img.shields.io/npm/v/nuxt7/latest.svg?style=flat-square">
</a>
<a href="https://npmjs.com/package/nuxt7">
    <img alt="" src="https://img.shields.io/npm/dt/nuxt7.svg?style=flat-square">
</a>
<a href="https://circleci.com/gh/nuxt-community/nuxt7">
    <img alt="" src="https://img.shields.io/circleci/project/github/nuxt-community/nuxt7/master.svg?style=flat-square">
</a>
<a href="https://standardjs.com">
    <img alt="" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square">
</a>
</p>

<p align="center">
Full Featured iOS & Android <strong>PWA</strong> Apps with <a href="https://nuxtjs.org">Nuxt.js</a> and <a href="https://framework7.io">Framework7</a>
<br>
</p>

Nuxt7 integrates universal nuxt.js applications with [Framework7](https://framework7.io/)[-Vue](https://framework7.io/vue)
to rapidly create efficient and feature-reach [PWA](https://developers.google.com/web/progressive-web-apps) mobile applications with help of [pwa-module](https://github.com/nuxt-community/pwa-module). Production builds can be statically hosted or running offline.

<a href="./CHANGELOG.md">📖 Release Notes</a>

<h2 align="center">✨ Features</h2>

* Fully compatible with framework7 2.x
* Development mode with hot reloading
* Optimized production builds suitable for 100% static hosting
* Fully PWA compatible out of the box
* Page based router for Framework7
* Use vuex store in your apps
* Familiar nuxt.js development experience with a super easy learning curve

<h2 align="center">⚔️ Quick Start</h2>

Use the command below to create a new app using starter template:

```bash
> npx sao nuxt-community/nuxt7 nuxt7-app
```

<h2 align="center">▶️ Examples</h2>

* [kitchen-sink](./examples/kitchen-sink) - [online version](https://nuxt7.cf)
* [with-params](./examples/with-params)

To locally run each example:

* Clone this repository
* Install dependencies using `yarn install`
* Run examples in development mode using `yarn examples/[example name]`
* Navigate to `http://localhost:3000`

<h2 align="center">🔧 Module options</h2>

Add options in `framework7` section inside `nuxt.config.js` file.

| Option       | Type    | Default                                                                                               | Description                                                               |
| ------------ | ------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `css`        | Boolean | `true`                                                                                                | Include Framework7 styles (Useful to disable and provide your own)        |
| `rtl`        | Boolean | `false`                                                                                               | Enable RTL layout                                                         |
| `f7Icons`    | Boolean | `true`                                                                                                | Include Framework7 Icons (IOS)                                            |
| `mdIcons`    | Boolean | `true`                                                                                                | Include MD Icons                                                          |
| `pwa`        | Boolean | `true`                                                                                                | Enable [@nuxtjs/pwa](https://github.com/nuxt-community/pwa-module) module |
| `routes`     | Object  | `true`                                                                                                | Route overrides (see below)                                               |
| `mode`       | String  | `hash`                                                                                                | Router mode. Can be `hash` or `history`                                   |
| `view`       | Object  | defaults                                                                                              | Options passed to root view of framework7                                 |
| `build`      | Object  | [framework7 defaults](https://github.com/framework7io/Framework7/blob/master/scripts/build-config.js) | Framework7 build config used for customizing less variables               |
| `themeColor` | String  | `undefined`                                                                                           | If specified, automatically sets all global theme colors to this value    |

### routes override

Routes are auto generated using pages directory structure.
However if you need to make more customization (Like adding routable tabs) this option may be used.

Example: (**nuxt.config.js**)

```js
framework7: {
    routes: {
      'tabs-routable': {
        tabs: [
          { path: "/", id: "tab1" },
          { path: "/tab2/", id: "tab2" },
          { path: "/tab3/", id: "tab3" },
        ]
      }
    }
}
```

<h2 align="center">🍳 Development</h2>

```bash
# Fork and clone git@github.com:nuxt-community/nuxt7.git

# Install dependencies
yarn install

# Start development server (kitchen sink)
yarn dev
```

<h2 align="center">License</h2>

MIT - Nuxt Community - Pooya Parsa
