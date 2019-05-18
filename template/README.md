# <%= name %>

> <%= description %>

## Development

``` bash
# Install dependencies
<% if (context.npmClient === 'yarn') { %>yarn add<% } else { %>npm i<% } %> <%= name %>

# Serve with hot-reload at localhost:3000
<%= context.npmClient %> run dev

# Build for production and launch server
<%= context.npmClient %> run build
<%= context.npmClient %> start

# Generate static project
<%= context.npmClient %> run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
