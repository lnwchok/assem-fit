import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ArrowLeft from '../components/ArrowLeft.vue'
import myImage from '../components/myImage.vue'
import xlsxReaderVue from '../components/xlsxReader.vue'

export default {
   ...DefaultTheme,
   // NotFound: () => 'custom 404',
   enhanceApp({ app }) {
      // register global components
      app.component('ArrowLeft', ArrowLeft)
      app.component('myImage', myImage)
      app.component('xlsxReader', xlsxReaderVue)
   }
}
