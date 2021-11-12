const { sidebar } = require('./config/sidebar')
const { nav } = require('./config/navbar')

module.exports = {
   base: '/',
   lang: 'en-US',
   title: 'R u R a',
   description: 'Just playing around.',
   themeConfig: {
      repo: 'lnwchok/assem-fit',
      sidebar,
      nav
   },

}
