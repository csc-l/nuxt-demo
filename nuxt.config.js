const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: 'red',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [
    'iview/dist/styles/iview.css',
    { src: '~assets/less/base.less', lang: 'less' } // 指定 less
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview'
  ],

  /*
  ** Nuxt.js modules
  */
  // modules: [
  //   '@nuxtjs/axios',
  //   '@nuxtjs/proxy'
  // ],
  // axios: {
  //   proxy:true
  // },
  // proxy: {
  //   '/rest': 'http://127.0.0.1:3000'
  // },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    // build 打包 css提取至单个文件
    extractCSS: { allChunks: true }
  },
  generate: {
    routes: [
      '/film/detail/1',
      '/film/detail/1',
      '/film/detail/2',
      '/film/detail/3'
    ]
  },
  // router: {
  //   middleware: ['navList']
  // }
}
