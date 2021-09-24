import DefaultTheme from 'vitepress/theme'
import ArrowLeft from '../components/ArrowLeft.vue'
import myImage from '../components/myImage.vue'

export default {
  ...DefaultTheme,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    // register global components
    app.component('ArrowLeft', ArrowLeft)
    app.component('myImage', myImage)
  }
}