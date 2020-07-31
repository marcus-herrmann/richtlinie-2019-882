module.exports = {
  head: {
    title: 'Was ist die Richtlinie (EU) 2019/882, auch bekannt als European Accessibility Act?',
    htmlAttrs: {
      lang: 'de',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'msapplication-TileColor', content: '#1e3a72'},
      {name: 'theme-color', content: '#ffffff'},
      {hid: 'description', name: 'description', content: 'Infoseite über die Richtlinie (EU) 2019/882 (auch bekannt als European Accessibility Act)'},
      {name: 'title', content: 'Was ist die Richtlinie (EU) 2019/882, auch bekannt als European Accessibility Act?'},
      {property: 'og:url', content: 'https://a11y-act.eu'},
      {property: 'twitter:card', content: 'summary'},
      {property: 'twitter:title', content: 'Was ist die Richtlinie (EU) 2019/882, auch bekannt als European Accessibility Act?'},
      {property: 'twitter:creator', content: '@_marcusherrmann'},
      {property: 'twitter:image', content: 'https://directive2102.eu/logo.png'},
      {property: 'twitter:url', content: 'https://a11y-act.eu'},
      {property: 'og:image', content: 'https://directive2102.eu/logo.png'},
      {property: 'og:title', content: 'Was ist die Richtlinie (EU) 2019/882, auch bekannt als European Accessibility Act?'},
      {property: 'og:description', name: 'twitter:description', content: 'Microsite zu Richtlinie (EU) 2019/882, auch bekannt als European Accessibility Act, die Unternehmen zur Barrierefreiheit verpflichten wuird'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'apple-touch-icon',  sizes: '180x180', href: '/apple-touch-icon.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png'},
      {rel: 'icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png'},
      {rel: 'manifest',  href: '/site.webmanifest'},
      {rel: 'mask-icon',  href: '/safari-pinned-tab.svg', color: '#1e3a72'}
    ]
  },
  plugins: ['~/plugins/vue-smooth-scroll'],
  loading: false,
  build: {
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
