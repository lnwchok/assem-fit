import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ArrowLeft from '../components/ArrowLeft.vue'
import myImage from '../components/myImage.vue'
import myTable from '../components/myTable.vue'

export default {
  ...DefaultTheme,
  // NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    // register global components
    app.component('ArrowLeft', ArrowLeft)
    app.component('myImage', myImage)
    app.component('myTable', myTable)
  }
}