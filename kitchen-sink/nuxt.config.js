module.exports = {
    srcDir: __dirname,
    build: {
        extractCSS: true
    },
    modules: [
        '@@/lib',
    ],
    manifest: {
        name: 'Nuxt7',
        description: 'Nuxt7 PWA Demo',
        theme_color: '#2196f3'
    },
    generate: {
        dir: 'demo-dist',
        routes: () => {
            return [
                '/'
            ]
        }
    }
}