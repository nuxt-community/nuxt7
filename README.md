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

## ✨ Features

* Fully compatible with framework7 2.x
* Development mode with hot reloading
* Optimized production builds suitable for 100% static hosting
* Fully PWA compatible out of the box
* Page based router for Framework7
* Use vuex store in your apps
* Familiar nuxt.js development experience with a super easy learning curve

## ⚔️ Quick Start

Use the command below to create a new app using starter template:

```bash
> npx sao nuxt-community/nuxt7 nuxt7-app
```

## ▶️ Examples

* [kitchen-sink](./examples/kitchen-sink) - [online version](https://nuxt7.cf)
* [with-params](./examples/with-params)

To locally run each example:

* Clone this repository
* Install dependencies using `yarn install`
* Run examples in development mode using `yarn examples/[example name]`
* Navigate to `http://localhost:3000`

## 🔧 Module options

Add options in `framework7` section inside `nuxt.config.js` file.

### `app`

- Type: `Object`

Default:

```js
app: {
  theme: 'auto'
}
```

Framework7 constructor params. See [App Component](https://framework7.io/vue/app.html) and [App Docs](https://framework7.io/docs/app.html) for all available parameters.

### `main`

- Type: `Object`

Default:

```js
main: {
    main: true,
    pushState: true
}
```

Props passed to the **main** `<f7-view>`. See [View Component](https://framework7.io/vue/view.html) docs for more info.

### `mode`

- Type: `String`
- Default: `history`

Router mode. Can be `hash` or `history`.

The `history` mode enables SEO friendly routes by setting `main.pushStateSeparator` value to `''`.

### `build`

- Type: `Object`

Framework7 build specific config. See [lib/build-config.js](lib/build-config.js) for all options.

- `rtl`: (Boolean) Enable RTL Layout. Disabled by default.
- `darkTheme`: (Boolean) Enable darkTheme support. Enabled by default.
- `themeColor`: (String) Primary app color. Default: `#007aff` (Dodger Blue)

Nuxt7 specific options:

- `invertNav`: (Boolean) Invert navigation bars to fill style. Enabled by default.
- `noLongTap`: (Boolean) Disable mobile browser default "long-tap" actions for all elements. Enabled by default.

### `css`

- Type: `Boolean`
- Default: `true`

Include Framework7 styles.

### `customCSS`

- Type: `Boolean`
- Default: `true`

Include Nuxt7 custom styles.


### `f7Icons`

- Type: `Boolean`
- Default: `true`

nclude Framework7 Icons (IOS).

### `mdIcons`

- Type: `Boolean`
- Default: `true`

Include MD Icons (Android).

### `routes`

- Type: `Boolean`
- Default: `true`

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

## 🍳 Development

```bash
# Fork and clone git@github.com:nuxt-community/nuxt7.git

# Install dependencies
yarn install

# Start development server (kitchen sink)
yarn dev
```

## License

MIT - Nuxt Community - Pooya Parsa
